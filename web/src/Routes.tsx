// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'

import { useAuth } from './auth'
import AuthLayout from './layouts/AuthLayout/AuthLayout'
import ContentLayout from './layouts/ContentLayout/ContentLayout'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Set wrap={ContentLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/@{handle:String}" page={HandlePage} name="handle" />
        <Route path="/find" page={FindPage} name="find" />
        <Route path="/https://openalex.org/A{id}" page={OpenAlexAuthorPage} name="openAlexAuthor" />
        <Route path="/https://openalex.org/W{id}" page={OpenAlexWorkPage} name="openAlexWork" />
        <Route path="/settings" page={SettingsPage} name="settings" />
        <Route path="/sitemap" page={SitemapPage} name="sitemap" />
      </Set>
      <Set wrap={AuthLayout}>
        <Route path="/verify-2fa" page={Verify2FAPage} name="verify2Fa" />
        <Route path="/verify-otp/{token}" page={VerifyOtpPage} name="verifyOtp" />
        <Route path="/setup-2fa" page={Setup2FAPage} name="setup2Fa" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      </Set>
      <Route path="/not-found" page={NotFoundPage} name="notFound" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
