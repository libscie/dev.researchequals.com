import { useRef } from 'react'
import { useEffect } from 'react'

import { Form, TextField, PasswordField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AuthContainer from 'src/components/AuthContainer/AuthContainer'
import AuthField from 'src/components/AuthField/AuthField'
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
          <Link to={routes.signup()} className="underline">
            Sign up!
          </Link>
        </>
      }
      form={
        <Form onSubmit={onSubmit} className="flex flex-col">
          <AuthField
            Field={TextField}
            name="email"
            label="Email"
            placeholder="test@example.com"
            validation={{
              required: {
                value: true,
                message: 'is required',
              },
            }}
            ref={emailRef}
          />
          <AuthField
            Field={PasswordField}
            name="password"
            label="Password"
            placeholder="Enter your password"
            validation={{
              required: {
                value: true,
                message: 'is required',
              },
            }}
            autoComplete="current-password"
          />
          <Link
            to={routes.forgotPassword()}
            className="my-2 block text-sm underline"
          >
            Forgot Password?
          </Link>
          <SubmitButton text="Log in" />
        </Form>
      }
    />
  )
}

export default LoginPage
