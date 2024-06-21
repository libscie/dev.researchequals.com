import { useEffect, useRef, useState } from 'react'

import { Form, Label, PasswordField, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AuthContainer from 'src/components/AuthContainer/AuthContainer'
import SubmitButton from 'src/components/SubmitButton/SubmitButton'

const ResetPasswordPage = ({ resetToken }: { resetToken: string }) => {
  const { isAuthenticated, reauthenticate, validateResetToken, resetPassword } =
    useAuth()
  const [enabled, setEnabled] = useState(true)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(resetToken)
      if (response.error) {
        setEnabled(false)
        toast.error(response.error)
      } else {
        setEnabled(true)
      }
    }
    validateToken()
  }, [resetToken, validateResetToken])

  const passwordRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    passwordRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await resetPassword({
      resetToken,
      password: data.password,
    })

    if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Password changed!')
      await reauthenticate()
      navigate(routes.login())
    }
  }

  return (
    <AuthContainer
      title="Reset Password"
      subtitle={null}
      form={
        <Form onSubmit={onSubmit} className="rw-form-wrapper">
          <div className="text-left">
            <Label
              name="password"
              className="auth-label"
              errorClassName="auth-label auth-label-error"
            >
              New Password
            </Label>
            <PasswordField
              name="password"
              autoComplete="new-password"
              className="auth-input"
              errorClassName="auth-input auth-input-error"
              disabled={!enabled}
              ref={passwordRef}
              validation={{
                required: {
                  value: true,
                  message: 'New Password is required',
                },
              }}
              placeholder="Enter new password"
            />

            <FieldError name="password" className="rw-field-error" />
          </div>

          <SubmitButton text="Submit" disabled={!enabled} />
        </Form>
      }
    />
  )
}

export default ResetPasswordPage
