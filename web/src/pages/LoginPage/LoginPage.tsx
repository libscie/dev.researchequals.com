import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AuthContainer from 'src/components/AuthContainer/AuthContainer'

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
    const response = await logIn({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <AuthContainer
      title="Log in"
      subtitle={
        <>
          <span>Don&apos;t have an account?</span>{' '}
          <Link to={routes.signup()} className="">
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
              Email
            </Label>
            <TextField
              name="email"
              className="auth-input"
              errorClassName="auth-input-error"
              ref={emailRef}
              validation={{
                required: {
                  value: true,
                  message: 'Email is required',
                },
              }}
              placeholder="test@example.com"
            />
            <FieldError name="email" className="" />
          </span>
          <span className="">
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
              errorClassName="auth-input-error"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
              placeholder="Enter your password"
            />
            <Link to={routes.forgotPassword()} className="my-2 block text-sm">
              Forgot Password?
            </Link>
            <FieldError name="password" className="" />
          </span>
          <Submit className="mx-auto flex h-8 w-auto cursor-pointer items-center rounded-[100px] border-0 bg-violet-600 px-2.5 py-1 text-center font-serif text-xl text-violet-50 hover:bg-violet-500">
            Log in
          </Submit>
        </Form>
      }
    />
  )
}

export default LoginPage
