import { DataCategorical, Logout, Settings } from '@carbon/icons-react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import Loader from '../Loader/Loader'

const Navigation = () => {
  const { t } = useTranslation()
  const { isAuthenticated, loading, currentUser, logOut } = useAuth()

  return (
    <nav className="flex flex-grow items-center justify-between">
      <Link to={routes.home()}>
        <div className="hidden rounded-full p-2 px-4 hover:bg-violet-950 hover:text-white sm:inline dark:hover:bg-violet-50 dark:hover:text-violet-950">
          {t('HomePage.title')}
        </div>
      </Link>
      <div className="mx-auto flex flex-grow text-left sm:inline sm:text-center [&>a]:text-violet-950 [&>a]:no-underline hover:[&>a]:text-white">
        <Link to={routes.find()}>
          <div className="rounded-full p-2 px-4 hover:bg-violet-950 hover:text-white sm:inline dark:hover:bg-violet-50 dark:hover:text-violet-950">
            {t('FindPage.title')}
          </div>
        </Link>
        <Link to={routes.home()}>
          <div className="rounded-full p-2 px-4 hover:bg-violet-950 hover:text-white sm:inline dark:hover:bg-violet-50 dark:hover:text-violet-950">
            {t('CollectPage.title')}
          </div>
        </Link>
        <Link to={routes.home()}>
          <div className="rounded-full p-2 px-4 hover:bg-violet-950 hover:text-white sm:inline dark:hover:bg-violet-50 dark:hover:text-violet-950">
            {t('WritePage.title')}
          </div>
        </Link>
        {/* <Link to={routes.home()}>
          <div className="rounded-full p-2 px-4 hover:bg-violet-950 hover:text-white sm:inline dark:hover:bg-violet-50 dark:hover:text-violet-950">
            {t('OrganizePage.title')}
          </div>
        </Link> */}
      </div>
      {loading ? (
        <Loader stroke="#000" />
      ) : isAuthenticated ? (
        <Menu>
          <MenuButton className="-mr-4 h-16 w-auto rounded-full focus:outline-none focus:outline-2 focus:ring focus:ring-violet-950 focus:ring-offset-2 active:bg-violet-700  data-[open]:bg-violet-700">
            <img
              src={currentUser.memberships[0].workspace.avatar}
              alt="avatar"
              className="m-0 h-16 w-auto rounded-full object-cover"
            />
          </MenuButton>
          <MenuItems
            anchor={{ to: 'top', gap: 8 }}
            className="w-52 origin-top-right rounded-xl bg-violet-200 bg-opacity-80 p-1 text-sm/6 text-violet-950 backdrop-blur-sm focus:outline-none"
          >
            {currentUser.memberships.map((membership) => {
              return (
                <MenuItem key={membership.workspace.handle}>
                  <Link
                    to={routes.handle({ handle: membership.workspace.handle })}
                    className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-violet-950 data-[focus]:text-white"
                  >
                    <img
                      src={membership.workspace.avatar}
                      alt="avatar"
                      // className="-mr-4 h-20 w-20 rounded-full object-cover"
                      className="size-6 rounded-full fill-violet-950 object-cover group-data-[focus]:fill-white"
                    />
                    {/* <UserAvatarFilledAlt /> */}
                    {membership.workspace.handle}
                  </Link>
                </MenuItem>
              )
            })}
            <MenuItem>
              <Link
                to={routes.home()}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-violet-950 data-[focus]:text-white sm:hidden"
              >
                <DataCategorical className="size-5 fill-violet-950 group-data-[focus]:fill-white" />
                Curate
              </Link>
            </MenuItem>
            <MenuItem>
              <Link
                to={routes.settings()}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-violet-950 data-[focus]:text-white"
              >
                <Settings className="size-5 fill-violet-950 group-data-[focus]:fill-white" />
                Settings
              </Link>
            </MenuItem>
            <MenuItem>
              <button
                onClick={logOut}
                className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-violet-950 data-[focus]:text-white"
              >
                <Logout className="size-5 fill-violet-950 group-data-[focus]:fill-white" />
                Log out
              </button>
            </MenuItem>
          </MenuItems>
        </Menu>
      ) : (
        <div className="rounded-full bg-violet-950 p-2 px-4 text-white">
          <Link to={routes.login()}>Log In</Link>
        </div>
      )}
    </nav>
  )
}

export default Navigation
