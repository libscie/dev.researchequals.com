import { useEffect, useRef, useState } from 'react'

import { FieldError, Form, Label, PasswordField } from '@redwoodjs/forms'
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
    <AuthContainer title="Reset Password" subtitle={null}>
      <Form onSubmit={onSubmit}>
        <div className="text-left">
          <span className="">
            <Label
              name="password"
              className="auth-label"
              errorClassName="auth-label-error"
            >
              New Password <FieldError name="password" className="" />
            </Label>
            <PasswordField
              name="password"
              className="auth-input"
              errorClassName="auth-input-error"
              ref={passwordRef}
              validation={{
                required: {
                  value: true,
                  message: 'New Password is required',
                },
              }}
              placeholder="Enter new password"
              autoComplete="new-password"
              disabled={!enabled}
            />
          </span>
        </div>
        <SubmitButton text="Submit" disabled={!enabled} />
      </Form>
    </AuthContainer>
  )
}

export default ResetPasswordPage
