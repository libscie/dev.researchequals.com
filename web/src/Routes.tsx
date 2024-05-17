import { Router, Route, Set } from '@redwoodjs/router'

import ContentLayout from './layouts/ContentLayout/ContentLayout'
import MarkdownLayout from './layouts/MarkdownLayout/MarkdownLayout'
import MarketingLayout from './layouts/MarketingLayout/MarketingLayout'

import { useAuth } from './auth'

const Routes = () => {
  return (
    <Router useAuth={useAuth}>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={ContentLayout}>
        <Route path="/author" page={AuthorPage} name="author" />
        <Route path="/search" page={SearchPage} name="search" />
        <Route path="/works" page={WorksPage} name="works" />
      </Set>
      <Set wrap={MarketingLayout} prerender>
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Set wrap={MarkdownLayout}>
        <Route path="/legal/code-of-conduct" page={CodeOfConductPage} name="codeOfConduct" />
        <Route path="/legal/data-processing-agreement" page={DataProcessingAgreementPage} name="dataProcessingAgreement" />
        <Route path="/legal/imprint" page={ImprintPage} name="imprint" />
        <Route path="/legal/poison-pill" page={PoisonPillPage} name="poisonPill" />
        <Route path="/legal/privacy" page={PrivacyPage} name="privacy" />
        <Route path="/legal/right-of-withdrawal" page={RightOfWithdrawalPage} name="rightOfWithdrawal" />
        <Route path="/legal/security" page={SecurityPage} name="security" />
        <Route path="/legal/terms" page={TermsPage} name="terms" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
