import { getCookieConsentValue } from 'react-cookie-consent'

import CookieBanner from 'src/components/CookieBanner/CookieBanner'
import Footer from 'src/components/Footer/Footer'
import HeaderBar from 'src/components/HeaderBar/HeaderBar'
import Navigation from 'src/components/Navigation/Navigation'

type ContentLayoutProps = {
  children?: React.ReactNode
}

const ContentLayout = ({ children }: ContentLayoutProps) => {
  const cookiesAccepted = getCookieConsentValue()

  return (
    <>
      <main className="h-100vh">{children}</main>
      <HeaderBar>
        {cookiesAccepted != null ? <Navigation /> : <CookieBanner />}
      </HeaderBar>
      <Footer />
    </>
  )
}

export default ContentLayout
