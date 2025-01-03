import { useEffect, useRef } from 'react'

import { FieldError, Form, Label, TextField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AuthContainer from 'src/components/AuthContainer/AuthContainer'
import SubmitButton from 'src/components/SubmitButton/SubmitButton'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { email: string }) => {
    const response = await forgotPassword(data.email)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <AuthContainer title="Forgot Password" subtitle={null}>
      <Form onSubmit={onSubmit} className="flex flex-col">
        <span className="">
          <Label
            name="email"
            className="auth-label"
            errorClassName="auth-label-error"
          >
            Email <FieldError name="email" className="" />
          </Label>
          <TextField
            name="email"
            className="auth-input"
            errorClassName="auth-input-error"
            ref={emailRef}
            validation={{
              required: {
                value: true,
                message: 'is required',
              },
            }}
            placeholder="test@example.com"
            // autoComplete="email"
          />
        </span>
        <SubmitButton text="Submit" />
      </Form>{' '}
    </AuthContainer>
  )
}

export default ForgotPasswordPage
