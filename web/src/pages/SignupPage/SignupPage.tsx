import { useEffect, useRef, useState } from 'react'

import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

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
        loading: t('Auth.signing-up'),
        success: t('Auth.sign-up-success'),
        error: (e) => {
          return `${t('Auth.error')}: ${e}`
        },
      }
    )
  }

  return (
    <AuthContainer
      title={t('Auth.sign-up')}
      subtitle={
        <>
          <span>{t('Auth.existing-account')}</span>{' '}
          <Link to={routes.login()} className="underline">
            {t('Auth.log-in')}
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
              {t('Auth.given-name')}{' '}
              <FieldError name="givenName" className="" />
            </Label>
            <TextField
              name="givenName"
              className="auth-input"
              errorClassName="auth-input-error"
              // ref={emailRef}
              validation={{
                required: {
                  value: true,
                  message: t('Auth.is-required'),
                },
              }}
              placeholder={t('Auth.given-name')}
            />
          </span>
          {/* Family name */}
          <span className="flex-grow">
            <Label
              name="familyName"
              className="auth-label"
              errorClassName="auth-label-error"
            >
              {t('Auth.family-name')}{' '}
              <FieldError name="familyName" className="" />
            </Label>
            <TextField
              name="familyName"
              className="auth-input"
              errorClassName="auth-input-error"
              validation={{
                required: {
                  value: true,
                  message: t('Auth.is-required'),
                },
              }}
              placeholder={t('Auth.family-name')}
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
            {t('Auth.handle')} <FieldError name="handle" className="" />
          </Label>
          <TextField
            name="handle"
            className="auth-input"
            errorClassName="auth-input-error"
            validation={{
              required: {
                value: true,
                message: t('Auth.is-required'),
              },
              pattern: {
                value: /^[a-zA-Z0-9_]+$/,
                message: t('Auth.password-pattern-error'),
              },
            }}
            placeholder={t('Auth.handle')}
          />
        </span>
        {/* Email */}
        <span>
          <Label
            name="email"
            className="auth-label"
            errorClassName="auth-label-error"
          >
            {t('Auth.email')} <FieldError name="email" className="" />
          </Label>
          <TextField
            name="email"
            className="auth-input"
            errorClassName="auth-input-error"
            validation={{
              required: {
                value: true,
                message: t('Auth.is-required'),
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
            {t('Auth.password')} <FieldError name="password" className="" />
          </Label>
          <PasswordField
            name="password"
            className="auth-input"
            errorClassName="auth-input-error"
            ref={passwordRef}
            validation={{
              required: {
                value: true,
                message: t('Auth.is-required'),
              },
            }}
            autoComplete="new-password"
            placeholder={t('Auth.password-placeholder')}
          />
        </span>
        <span className="mx-4 sm:text-left">
          <CheckboxField
            name="show-password"
            onClick={togglePasswordField}
            className="my-2 mr-2 h-4 w-4 rounded border-gray-300 bg-gray-200 text-violet-950 focus:ring-violet-500"
          />
          <Label name="show-password" className="text-sm">
            {t('Auth.show-password')}
          </Label>
        </span>
        <SignupSwitch
          state={termsAccepted}
          stateUpdateFn={setTermsAccepted}
          label={t('Auth.SignUp.tos-label')}
        >
          {t('Auth.SignUp.i-agree')}{' '}
          <a
            href={routes.home()}
            target="_blank"
            className="text-gray-700  underline focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
            rel="noreferrer"
          >
            {t('Auth.SignUp.tos')}
          </a>{' '}
          {t('Auth.SignUp.and')}{' '}
          <a
            href={routes.home()}
            target="_blank"
            className="text-gray-700  underline focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
            rel="noreferrer"
          >
            {t('Auth.SignUp.pp')}
          </a>
        </SignupSwitch>
        <SignupSwitch
          state={cocAccepted}
          stateUpdateFn={setCocAccepted}
          label={t('Auth.SignUp.coc-label')}
        >
          {t('Auth.SignUp.i-agree')}{' '}
          <a
            href={routes.home()}
            target="_blank"
            className="text-gray-700 underline focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-0"
            rel="noreferrer"
          >
            {t('Auth.SignUp.coc')}
          </a>
        </SignupSwitch>

        <SubmitButton
          text={t('Auth.sign-up')}
          disabled={!(termsAccepted && cocAccepted)}
        />
      </Form>
    </AuthContainer>
  )
}

export default SignupPage
