import { useTranslation } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import Loader from '../Loader/Loader'
const Navigation = () => {
  const { t } = useTranslation()
  const { isAuthenticated, loading, logOut } = useAuth()

  return (
    <nav className="flex flex-grow items-center justify-between">
      <div className="hidden rounded-full p-2 px-4 hover:bg-violet-950 hover:text-white sm:inline">
        <Link to={routes.home()}>{t('HomePage.title')}</Link>
      </div>
      <div className="mx-auto flex flex-grow text-left sm:inline sm:text-center [&>a]:text-violet-950 [&>a]:no-underline hover:[&>a]:text-white">
        <div className="rounded-full p-2 px-4 hover:bg-violet-950 hover:text-white sm:inline">
          <Link to={routes.home()}>{t('FindPage.title')}</Link>
        </div>
        <div className="rounded-full p-2 px-4 hover:bg-violet-950 hover:text-white sm:inline">
          <Link to={routes.home()}>{t('WritePage.title')}</Link>
        </div>
        <div className="rounded-full p-2 px-4 hover:bg-violet-950 hover:text-white sm:inline">
          <Link to={routes.home()}>{t('CollectPage.title')}</Link>
        </div>
      </div>
      {/* TODO: This part needs to be revised to be dynamic */}
      {loading ? (
        <Loader stroke="#000" />
      ) : isAuthenticated ? (
        <button
          onClick={logOut}
          className="rounded-full p-2 px-4 hover:bg-violet-950 hover:text-white"
        >
          Log out
        </button>
      ) : (
        <div className="rounded-full bg-violet-950 p-2 px-4 text-white ring-offset-2 ring-offset-current hover:ring-2 hover:ring-violet-950">
          <Link to={routes.login()}>Log In</Link>
        </div>
      )}
    </nav>
  )
}

export default Navigation
