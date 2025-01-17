import { useEffect, useState } from 'react'

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import AuthContainer from 'src/components/AuthContainer/AuthContainer'
import SubmitButton from 'src/components/SubmitButton/SubmitButton'

const WELCOME_MESSAGE = 'Welcome back!'
const REDIRECT = routes.home()

const LoginPage = ({ type }) => {
  const {
    isAuthenticated,
    client: webAuthn,
    loading,
    logIn,
    reauthenticate,
  } = useAuth()
  const [shouldShowWebAuthn, setShouldShowWebAuthn] = useState(false)
  const [showWebAuthn, setShowWebAuthn] = useState(
    webAuthn.isEnabled() && type !== 'password'
  )
  // should redirect right after login or wait to show the webAuthn prompts?
  useEffect(() => {
    if (isAuthenticated && (!shouldShowWebAuthn || webAuthn.isEnabled())) {
      navigate(REDIRECT)
    }
  }, [isAuthenticated, shouldShowWebAuthn])

  // if WebAuthn is enabled, show the prompt as soon as the page loads
  useEffect(() => {
    if (!loading && !isAuthenticated && showWebAuthn) {
      onAuthenticate()
    }
  }, [loading, isAuthenticated])

  const onSubmit = async (data) => {
    const webAuthnSupported = await webAuthn.isSupported()

    if (webAuthnSupported) {
      setShouldShowWebAuthn(true)
    }
    const response = await logIn({
      username: data.email,
      password: data.password,
    })

    if (response.message) {
      // auth details good, but user not logged in
      toast(response.message)
    } else if (response.error) {
      const isHex64Char = /^[0-9a-f]{64}$/.test(response.error)
      // error while authenticating
      if (isHex64Char) {
        navigate(routes.verifyOtp({ token: response.error }))
      } else {
        toast.error(response.error)
      }
    } else {
      // user logged in
      if (webAuthnSupported) {
        setShowWebAuthn(true)
      } else {
        toast.success(WELCOME_MESSAGE)
      }
    }
  }

  const onAuthenticate = async () => {
    try {
      await webAuthn.authenticate()
      await reauthenticate()
      toast.success(WELCOME_MESSAGE)
      navigate(REDIRECT)
    } catch (e) {
      if (e.name === 'WebAuthnDeviceNotFoundError') {
        toast.error(
          'Device not found, log in with Username/Password to continue'
        )
        setShowWebAuthn(false)
      } else {
        toast.error(e.message)
      }
    }
  }

  const onRegister = async () => {
    try {
      await webAuthn.register()
      toast.success(WELCOME_MESSAGE)
      navigate(REDIRECT)
    } catch (e) {
      toast.error(e.message)
    }
  }

  const onSkip = () => {
    toast.success(WELCOME_MESSAGE)
    setShouldShowWebAuthn(false)
  }

  const AuthWebAuthnPrompt = () => {
    return (
      <div className="rw-button-group">
        <button className="rw-button rw-button-blue" onClick={onAuthenticate}>
          Open Authenticator
        </button>
      </div>
    )
  }

  const RegisterWebAuthnPrompt = () => (
    <div>
      <h3>No more Passwords!</h3>
      <p>
        Depending on your device you can log in with your fingerprint, face or
        PIN next time.
      </p>
      <div className="rw-button-group">
        <button className="rw-button rw-button-blue" onClick={onRegister}>
          Turn On
        </button>
        <button className="rw-button" onClick={onSkip}>
          Skip for now
        </button>
      </div>
    </div>
  )

  const PasswordForm = () => (
    <Form onSubmit={onSubmit} className="flex flex-col">
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
          validation={{
            required: {
              value: true,
              message: 'is required',
            },
          }}
          placeholder="Enter your password"
          autoComplete="current-password"
        />
      </span>
      {/* Forgot */}
      <Link
        to={routes.forgotPassword()}
        className="my-2 block text-sm underline"
      >
        Forgot Password?
      </Link>
      <SubmitButton text="Log in" />
    </Form>
  )

  const formToRender = () => {
    if (showWebAuthn) {
      if (webAuthn.isEnabled()) {
        return <AuthWebAuthnPrompt />
      } else {
        return <RegisterWebAuthnPrompt />
      }
    } else {
      return <PasswordForm />
    }
  }

  const linkToRender = () => {
    if (showWebAuthn) {
      if (webAuthn.isEnabled()) {
        return (
          <div>
            <span>Alternatively, log in with </span>{' '}
            <a href="?type=password" className="underline">
              username and password
            </a>
          </div>
        )
      }
    } else {
      return (
        <div>
          <span>Don&apos;t have an account?</span>{' '}
          <Link to={routes.signup()} className="underline">
            Sign up!
          </Link>
        </div>
      )
    }
  }

  if (loading) {
    return null
  }

  return (
    <AuthContainer title="Log in" subtitle={linkToRender()}>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <div>{formToRender()}</div>
    </AuthContainer>
  )
}

export default LoginPage
