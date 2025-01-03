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
      <a
        href="#main-content"
        className="sr-only z-[99999] font-serif text-2xl font-medium focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:bg-violet-200 focus:p-2 focus:text-violet-950"
      >
        Skip to main content
      </a>
      <main className="h-100vh container mx-auto">{children}</main>
      <HeaderBar>
        {cookiesAccepted != null ? <Navigation /> : <CookieBanner />}
      </HeaderBar>
      <Footer />
    </>
  )
}

export default ContentLayout
