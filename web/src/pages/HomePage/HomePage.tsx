import { getCookieConsentValue } from 'react-cookie-consent'

import { Metadata } from '@redwoodjs/web'

import CookieBanner from 'src/components/CookieBanner/CookieBanner'
import HeaderBar from 'src/components/HeaderBar/HeaderBar'

const HomePage = () => {
  const cookiesAccepted = getCookieConsentValue()

  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <HeaderBar>
        {cookiesAccepted != null ? 'yes' : <CookieBanner />}
      </HeaderBar>
    </>
  )
}

export default HomePage
