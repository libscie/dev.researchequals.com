import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AuthContainer from 'src/components/AuthContainer/AuthContainer'
import SubmitButton from 'src/components/SubmitButton/SubmitButton'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    toast.promise(
      logIn({
        username: data.email,
        password: data.password,
      }),
      {
        loading: 'Logging in...',
        success: 'Logged in!',
        error: (e) => {
          return `Error: ${e}`
        },
      }
    )
  }

  return (
    <AuthContainer
      title="Log in"
      subtitle={
        <>
          <span>Don&apos;t have an account?</span>{' '}
          <Link to={routes.signup()} className="underline">
            Sign up!
          </Link>
        </>
      }
      form={
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
            />
          </span>
          <span className="">
            <Label
              name="password"
              className="auth-label"
              errorClassName="auth-label-error"
            >
              Password <FieldError name="password" className="" />
            </Label>
            <PasswordField
              name="password"
              className="auth-input"
              errorClassName="auth-input-error"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'is required',
                },
              }}
              placeholder="Enter your password"
            />
            <Link
              to={routes.forgotPassword()}
              className="my-2 block text-sm underline"
            >
              Forgot Password?
            </Link>
          </span>
          <SubmitButton text="Log in" />
        </Form>
      }
    />
  )
}

export default LoginPage
