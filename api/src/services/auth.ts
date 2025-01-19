import crypto from 'crypto'

import OTPAuth from 'otpauth'
import qrcode from 'qrcode'

import { db } from 'src/lib/db'

interface TwoFASetup {
  secret: string
  qrCodeUrl: string
}

export const setupTwoFactorAuth = async ({
  userId,
}: {
  userId: number
}): Promise<TwoFASetup> => {
  const secret = new OTPAuth.Secret() // Generate a random secret

  // Create an otpauth URL for the user
  const totp = new OTPAuth.TOTP({
    issuer: process.env.APP_NAME,
    label: `user-${userId}`, // Customize as needed
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
    secret,
  })

  // Save the base32-encoded secret to the database
  await db.user.update({
    where: { id: userId },
    // TODO: Reset to not enabled when regenerating secret
    data: { twoFactorSecret: secret.base32 },
  })

  // Generate a QR code
  const qrCodeUrl = await qrcode.toDataURL(totp.toString())

  return { secret: secret.base32, qrCodeUrl }
}

export const verifyTwoFactorAuth = async ({ userId, token }) => {
  const user = await db.user.findUnique({ where: { id: userId } })

  // Check if the user has 2FA enabled
  if (!user || !user.twoFactorSecret) {
    throw new Error('2FA is not set up for this user')
  }

  const totp = new OTPAuth.TOTP({
    secret: OTPAuth.Secret.fromBase32(user.twoFactorSecret),
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
  })

  const isValid = totp.validate({ token, window: 1 }) !== null // Allow for slight clock drift

  if (isValid) {
    await db.user.update({
      where: { id: userId },
      data: { twoFactorEnabled: true },
    })
  }

  return isValid
}

export const verifyOtp = async ({
  otpToken,
  token,
}: {
  otpToken: string
  token: string
}): Promise<string> => {
  // Hash the incoming otpToken to match stored tokens
  // Find the token in the database
  const dbToken = await db.token.findFirst({
    where: {
      hashedToken: token,
      type: 'OTP', // Ensure the token type is OTP
      expiresAt: { gt: new Date() }, // Token must not be expired
    },
    include: {
      user: true, // Include the user for TOTP validation
    },
  })

  if (!dbToken) {
    throw new Error('Invalid or expired OTP token')
  }

  const user = dbToken.user
  if (!user || !user.twoFactorEnabled) {
    throw new Error('2FA is not enabled for this user')
  }

  // Validate the TOTP token using the user's secret
  const totp = new OTPAuth.TOTP({
    secret: OTPAuth.Secret.fromBase32(user.twoFactorSecret),
    algorithm: 'SHA1',
    digits: 6,
    period: 30,
  })

  const isValid = totp.validate({ token: otpToken, window: 1 }) !== null

  if (!isValid) {
    throw new Error('Invalid OTP')
  }

  // Invalidate the OTP token after successful validation
  await db.token.delete({
    where: { id: dbToken.id },
  })

  // Create a session token for the user
  const sessionToken = await db.token.create({
    data: {
      type: 'SESSION',
      hashedToken: crypto.randomBytes(32).toString('hex'), // Replace with actual hashed token
      expiresAt: new Date(Date.now() + 1000 * 30), // 30 seconds
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  })

  return sessionToken.hashedToken
}
