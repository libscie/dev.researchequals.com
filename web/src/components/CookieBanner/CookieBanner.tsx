import CookieConsent from 'react-cookie-consent'
import { useTranslation } from 'react-i18next'

const CookieBanner = () => {
  const { t } = useTranslation()

  return (
    <CookieConsent
      disableStyles={true}
      cookieName={process.env.APP_NAME || 'ResearchEquals Instance Cookie'}
      buttonClasses="rounded-full p-2 px-4 hover:bg-emerald-800 hover:text-white"
      declineButtonClasses="rounded-full p-2 px-4 hover:bg-red-800 hover:text-white"
      containerClasses="flex w-full pl-2"
      // containerClasses="fixed bottom-8 z-[9999] m-0 w-full select-none p-0"
      // contentClasses="mx-auto h-16 w-5/6 rounded-full bg-violet-200 bg-opacity-80 pl-8 pr-4 align-middle font-serif text-xl text-violet-950 backdrop-blur-sm lg:w-2/3 text-capitalize"
      enableDeclineButton
      buttonText={t('CookieBanner.accept')}
      declineButtonText={t('CookieBanner.decline')}
      onAccept={() => window.location.reload()}
      onDecline={() => window.location.reload()}
      contentClasses="flex-grow"
    >
      <div className="flex h-full items-center">
        <nav className="flex flex-grow">{t('CookieBanner.description')}</nav>
      </div>
    </CookieConsent>
  )
}

export default CookieBanner
