import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AuthContainer from 'src/components/AuthContainer/AuthContainer'

// TODO
// - [ ] Add a password confirmation field

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on email box on page load
  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <AuthContainer
      title="Sign up"
      subtitle={
        <>
          <span>Already have an account?</span>{' '}
          <Link to={routes.login()} className="rw-link">
            Log in!
          </Link>
        </>
      }
      form={
        <Form onSubmit={onSubmit} className="rw-form-wrapper">
          <Label
            name="email"
            className="auth-label"
            errorClassName="auth-label-error"
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
          <Label
            name="password"
            className="auth-label"
            errorClassName="auth-label-error"
          >
            Password
          </Label>
          <PasswordField
            name="password"
            className="auth-input"
            errorClassName="auth-input auth-input-error"
            autoComplete="current-password"
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
            placeholder="Enter a password"
          />
          <FieldError name="password" className="rw-field-error" />

          <div className="rw-button-group">
            <Submit className="rw-button rw-button-blue">Sign Up</Submit>
          </div>
        </Form>
      }
    />
  )
}

export default SignupPage
