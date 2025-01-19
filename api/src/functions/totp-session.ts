// https://community.redwoodjs.com/t/debugging-before-dbauth-login-handler/5794/3

import { encryptSession } from '@redwoodjs/auth-dbauth-api'

import { db } from 'src/lib/db'
import { memberships } from 'src/services/memberships/memberships'

const secureCookie = (user) => {
  const expires = new Date()
  expires.setFullYear(expires.getFullYear() + 1)

  const cookieAttrs = [
    `Expires=${expires.toUTCString()}`,
    'HttpOnly=true',
    'Path=/',
    'SameSite=Strict',
    `Secure=${process.env.NODE_ENV !== 'development'}`,
  ]
  const data = JSON.stringify({
    id: user.id,
    email: user.email,
    twoFactorEnabled: user.twoFactorEnabled,
    memberships: user.memberships.map(memberships),
  })
  const encrypted = encryptSession(data)

  return [`session_8911=${encrypted}`, ...cookieAttrs].join('; ')
}

// this is the function that gets called when the function is loaded
// this would be the link in the email, something like:
// https://example.com/.redwood/functions/passwordless?token=abc123
export const handler = async (event) => {
  const { token } = event.queryStringParameters

  // Find the user by the token
  const sessionToken = await db.token.findFirst({
    where: {
      hashedToken: token,
      type: 'SESSION',
    },
    include: {
      user: {
        select: {
          id: true,
          email: false,
          twoFactorEnabled: true,
          memberships: {
            include: { workspace: true },
          },
        },
      },
    },
  })

  if (sessionToken) {
    return {
      statusCode: 302,
      headers: {
        'Set-Cookie': secureCookie(sessionToken.user),
        Location: '/',
      },
    }
  } else {
    return {
      statusCode: 302,
      headers: {
        Location: '/?error=Token+not+found',
      },
    }
  }
}
