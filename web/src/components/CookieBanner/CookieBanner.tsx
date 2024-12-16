import CookieConsent from 'react-cookie-consent'

const CookieBanner = () => {
  return (
    <CookieConsent
      disableStyles={true}
      // cookieName="myAwesomeCookieName2"
      buttonClasses="rounded-md p-2 px-4 hover:bg-emerald-800 hover:text-white"
      declineButtonClasses="rounded-md p-2 px-4 hover:bg-red-800 hover:text-white"
      containerClasses="flex w-full"
      // containerClasses="fixed bottom-8 z-[9999] m-0 w-full select-none p-0"
      // contentClasses="mx-auto h-16 w-5/6 rounded-full bg-violet-200 bg-opacity-80 pl-8 pr-4 align-middle font-serif text-xl text-violet-950 backdrop-blur-sm lg:w-2/3 text-capitalize"
      enableDeclineButton
      buttonText="Accept"
      declineButtonText="Decline"
      onAccept={() => window.location.reload()}
      onDecline={() => window.location.reload()}
      contentClasses="flex-grow"
    >
      <div className="flex h-full items-center">
        <nav className="flex flex-grow">We only use essential cookies.</nav>
      </div>
    </CookieConsent>
  )
}

export default CookieBanner
