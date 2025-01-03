import { useEffect, useRef, useState } from 'react'

import {
  Label,
  TextField,
  PasswordField,
  FieldError,
  CheckboxField,
  Form,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AuthContainer from 'src/components/AuthContainer/AuthContainer'
import SignupSwitch from 'src/components/SignupSwitch/SignupSwitch'
import SubmitButton from 'src/components/SubmitButton/SubmitButton'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [cocAccepted, setCocAccepted] = useState(false)

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const passwordRef = useRef<HTMLInputElement>(null)
  const togglePasswordField = () => {
    if (passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text'
    } else {
      passwordRef.current.type = 'password'
    }
  }

  const onSubmit = async (data: Record<string, string>) => {
    toast.promise(
      signUp({
        // username here because of RedwoodJS
        username: data.email,
        handle: data.handle,
        password: data.password,
        givenName: data.givenName,
        familyName: data.familyName,
      }),
      {
        loading: 'Signing up...',
        success: 'Account created!',
        error: (e) => {
          return `Error: ${e}`
        },
      }
    )
  }

  return (
    <AuthContainer
      title="Sign up"
      subtitle={
        <>
          <span>Already have an account?</span>{' '}
          <Link to={routes.login()} className="underline">
            Log in!
          </Link>
        </>
      }
    >
      <Form onSubmit={onSubmit} className="flex flex-col">
        {/* Given name */}
        <span className="lg:flex lg:gap-8">
          <span className="flex-grow">
            <Label
              name="givenName"
              className="auth-label"
              errorClassName="auth-label-error"
            >
              Given Name <FieldError name="givenName" className="" />
            </Label>
            <TextField
              name="givenName"
              className="auth-input"
              errorClassName="auth-input-error"
              // ref={emailRef}
              validation={{
                required: {
                  value: true,
                  message: 'is required',
                },
              }}
              placeholder="Given Name"
            />
          </span>
          {/* Family name */}
          <span className="flex-grow">
            <Label
              name="familyName"
              className="auth-label"
              errorClassName="auth-label-error"
            >
              Family Name <FieldError name="familyName" className="" />
            </Label>
            <TextField
              name="familyName"
              className="auth-input"
              errorClassName="auth-input-error"
              validation={{
                required: {
                  value: true,
                  message: 'is required',
                },
              }}
              placeholder="Family Name"
            />
          </span>
        </span>
        {/* Handle */}
        <span>
          <Label
            name="handle"
            className="auth-label"
            errorClassName="auth-label-error"
          >
            Handle <FieldError name="handle" className="" />
          </Label>
          <TextField
            name="handle"
            className="auth-input"
            errorClassName="auth-input-error"
            validation={{
              required: {
                value: true,
                message: 'is required',
              },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: 'can only contain letters, numbers, and underscores',
              },
            }}
            placeholder="Username"
          />
        </span>
        {/* Email */}
        <span>
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
            validation={{
              required: {
                value: true,
                message: 'is required',
              },
            }}
            placeholder="test@example.com"
          />
        </span>
        {/* Password */}
        <span>
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
            ref={passwordRef}
            validation={{
              required: {
                value: true,
                message: 'is required',
              },
            }}
            autoComplete="new-password"
            placeholder="Enter your password"
          />
        </span>
        <span className="mx-4 sm:text-left">
          <CheckboxField
            name="show-password"
            onClick={togglePasswordField}
            className="my-2 mr-2 h-4 w-4 rounded border-gray-300 bg-gray-200 text-violet-950 focus:ring-violet-500"
          />
          <Label name="show-password" className="text-sm">
            Show password
          </Label>
        </span>
        <SignupSwitch
          state={termsAccepted}
          stateUpdateFn={setTermsAccepted}
          label="Agree to terms of use and privacy policy"
        >
          I agree to the{' '}
          <a
            href={routes.home()}
            target="_blank"
            className="text-gray-700  underline focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
            rel="noreferrer"
          >
            Terms of use
          </a>{' '}
          and to the processing of my personal data according to the{' '}
          <a
            href={routes.home()}
            target="_blank"
            className="text-gray-700  underline focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
            rel="noreferrer"
          >
            Privacy policy
          </a>
        </SignupSwitch>
        <SignupSwitch
          state={cocAccepted}
          stateUpdateFn={setCocAccepted}
          label="Agree to code of conduct"
        >
          I agree to the{' '}
          <a
            href={routes.home()}
            target="_blank"
            className="text-gray-700 underline focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
            rel="noreferrer"
          >
            Code of Conduct
          </a>
        </SignupSwitch>

        <SubmitButton
          text="Sign up"
          disabled={!(termsAccepted && cocAccepted)}
        />
      </Form>
    </AuthContainer>
  )
}

export default SignupPage
