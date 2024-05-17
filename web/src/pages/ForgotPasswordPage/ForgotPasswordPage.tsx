import { useEffect, useRef } from 'react'

import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AuthContainer from 'src/components/AuthContainer/AuthContainer'

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
    <AuthContainer
      title="Forgot Password"
      subtitle={null}
      form={
        <Form onSubmit={onSubmit} className="rw-form-wrapper">
          <div className="text-left">
            <Label
              name="email"
              className="auth-label"
              errorClassName="auth-label auth-label-error"
            >
              Email
            </Label>
            <TextField
              name="email"
              className="auth-input"
              errorClassName="auth-input auth-input-error"
              ref={emailRef}
              validation={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
              }}
              placeholder="test@example.com"
            />

            <FieldError name="email" className="rw-field-error" />
          </div>

          <div className="rw-button-group">
            <Submit className="rw-button rw-button-blue">Submit</Submit>
          </div>
        </Form>
      }
    />
  )
}

export default ForgotPasswordPage
