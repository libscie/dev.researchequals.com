// api/src/functions/passwordless.js

import { encryptSession } from '@redwoodjs/auth-dbauth-api'

import { db } from 'src/lib/db'

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
  const data = JSON.stringify({ id: user.id })
  const encrypted = encryptSession(data)

  return [`session=${encrypted}`, ...cookieAttrs].join('; ')
}

// this is the function that gets called when the function is loaded
// this would be the link in the email, something like:
// https://example.com/.redwood/functions/passwordless?token=abc123
export const handler = async (event) => {
  const { token } = event.queryStringParameters
  console.log('yes')
  const user = await db.user.findFirst({
    where: { id: parseInt(token) },
  })

  if (user) {
    return {
      statusCode: 302,
      headers: {
        'Set-Cookie': secureCookie(user),
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
