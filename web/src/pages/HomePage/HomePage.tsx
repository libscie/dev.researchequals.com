import { getCookieConsentValue } from 'react-cookie-consent'
import { useTranslation } from 'react-i18next'

import { Metadata } from '@redwoodjs/web'

import CookieBanner from 'src/components/CookieBanner/CookieBanner'
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

      <h1>{t('HomePage.title')}</h1>
      <p>{t('HomePage.description')}</p>
      <HeaderBar>
        {cookiesAccepted != null ? 'yes' : <CookieBanner />}
      </HeaderBar>
    </>
  )
}

export default HomePage
