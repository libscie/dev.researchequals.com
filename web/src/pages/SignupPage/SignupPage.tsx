import { useRef, useState } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  CheckboxField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AuthContainer from 'src/components/AuthContainer/AuthContainer'
import AuthField from 'src/components/AuthField/AuthField'
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

  const passwordRef = useRef<HTMLInputElement>(null)
  const togglePasswordField = () => {
    if (passwordRef.current.type === 'password') {
      passwordRef.current.type = 'text'
    } else {
      passwordRef.current.type = 'password'
    }
  }
  // focus on email box on page load
  const emailRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    emailRef.current?.focus()
  }, [])

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
      form={
        <Form onSubmit={onSubmit} className="flex flex-col">
          <span className="lg:flex lg:gap-8">
            <AuthField
              Field={TextField}
              classNames="flex-grow"
              name="givenName"
              label="Given name"
              placeholder="Given name"
              validation={{
                required: {
                  value: true,
                  message: 'is required',
                },
              }}
              ref={emailRef}
            />
            <AuthField
              Field={TextField}
              classNames="flex-grow"
              name="familyName"
              label="Family name"
              placeholder="Family name"
              validation={{
                required: {
                  value: true,
                  message: 'is required',
                },
              }}
            />
          </span>
          <AuthField
            Field={TextField}
            name="handle"
            label="Handle"
            placeholder="researchequals.com/@handle"
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
          />
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
            autoComplete="new-password"
          />
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
              href={routes.terms()}
              target="_blank"
              className="text-gray-700  underline focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
              rel="noreferrer"
            >
              Terms of use
            </a>{' '}
            and to the processing of my personal data according to the{' '}
            <a
              href={routes.privacy()}
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
              href={routes.codeOfConduct()}
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
      }
    />
  )
}

export default SignupPage
