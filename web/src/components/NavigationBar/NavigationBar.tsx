import { useState } from 'react'

import { DataCategorical, Logout, Settings } from '@carbon/icons-react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import Button from 'src/components/Button'

const NavigationBar = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  console.log(currentUser)
  return (
    <header className="fixed bottom-8 z-[9999] m-0 w-full select-none p-0">
      <div className="mx-auto h-16 w-5/6 rounded-full bg-violet-200 bg-opacity-80 pl-8 pr-4 align-middle font-serif text-xl text-violet-950 backdrop-blur-sm lg:w-2/3">
        <div className="flex h-full items-center">
          <nav className="flex flex-grow">
            <div className="hidden sm:inline [&>a]:text-violet-950 [&>a]:no-underline hover:[&>a]:text-violet-700">
              <Link to={routes.home()} className="mr-2">
                Home
              </Link>
            </div>
            <div className="mx-auto flex-grow text-left sm:text-center [&>a]:text-violet-950 [&>a]:no-underline hover:[&>a]:text-white">
              <Link
                to={routes.search()}
                className="rounded-md p-2 px-4 hover:bg-violet-950"
              >
                Find
              </Link>
              <Link
                to={routes.home()}
                className="rounded-md p-2 px-4 hover:bg-violet-950"
              >
                Share
              </Link>
              <Link
                to={routes.home()}
                className="hidden rounded-md p-2 px-4 hover:bg-violet-950 sm:inline"
              >
                Curate
              </Link>
            </div>
          </nav>
          {isAuthenticated ? (
            <>
              <Menu>
                <MenuButton className="-mr-4 h-20 w-20 rounded-full focus:outline-none focus:outline-2 focus:ring focus:ring-violet-950 focus:ring-offset-2 active:bg-violet-700  data-[open]:bg-violet-700">
                  <img
                    src="https://www.chjh.nl/content/images/2022/04/220329_ChrisHartgerink_384_v1.jpg"
                    alt="avatar"
                    className="-mr-4 h-20 w-20 rounded-full object-cover"
                  />
                </MenuButton>
                <MenuItems
                  anchor={{ to: 'bottom', gap: 8 }}
                  className="w-52 origin-top-right rounded-xl bg-violet-200 bg-opacity-80 p-1 text-sm/6 text-violet-950 backdrop-blur-sm focus:outline-none"
                >
                  <MenuItem>
                    <Link
                      to={routes.home()}
                      className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-violet-950 hover:text-white sm:hidden"
                    >
                      <DataCategorical className="size-4 fill-violet-950 group-hover:fill-white" />
                      Curate
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={routes.settings()}
                      className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-violet-950 hover:text-white"
                    >
                      <Settings className="size-4 fill-violet-950 group-hover:fill-white" />
                      Settings
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <button
                      onClick={logOut}
                      className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-violet-950 hover:text-white"
                    >
                      <Logout className="size-4 fill-violet-950 group-hover:fill-white" />
                      Log out
                    </button>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </>
          ) : (
            <>
              <Link to={routes.login()}>Login</Link>
              <Button styling="">Sign up</Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default NavigationBar
