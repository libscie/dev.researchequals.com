import { getCookieConsentValue } from 'react-cookie-consent'
import { useTranslation } from 'react-i18next'

import { Metadata } from '@redwoodjs/web'

import CookieBanner from 'src/components/CookieBanner/CookieBanner'
import Footer from 'src/components/Footer/Footer'
import HeaderBar from 'src/components/HeaderBar/HeaderBar'

const HomePage = () => {
  const cookiesAccepted = getCookieConsentValue()
  const { t } = useTranslation()

  return (
    <>
      <Metadata
        title={t('HomePage.title')}
        description={t('HomePage.description')}
      />
      <main className="h-100vh">
        <h1>{t('HomePage.title')}</h1>
        <p>{t('HomePage.description')}</p>
      </main>
      <HeaderBar>
        {cookiesAccepted != null ? 'yes' : <CookieBanner />}
      </HeaderBar>
      <Footer />
    </>
  )
}

export default HomePage
