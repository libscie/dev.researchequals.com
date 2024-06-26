import {
  DataCategorical,
  DecisionTree,
  Logout,
  ManageProtection,
  Settings,
} from '@carbon/icons-react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

import { Link, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

const NavigationBarDynamic = () => {
  const { isAuthenticated, currentUser, loading, logOut } = useAuth()

  return (
    <>
      {loading ? (
        <svg
          className="mr-3 h-5 w-5 animate-spin fill-violet-500"
          viewBox="0 0 24 24"
        ></svg>
      ) : isAuthenticated ? (
        <>
          <Menu>
            <MenuButton className="-mr-4 h-20 w-20 rounded-full focus:outline-none focus:outline-2 focus:ring focus:ring-violet-950 focus:ring-offset-2 active:bg-violet-700  data-[open]:bg-violet-700">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/24/Missing_avatar.svg"
                alt="avatar"
                className="-mr-4 h-20 w-20 rounded-full object-cover"
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
                      to={routes.author()}
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
              {currentUser.type != 'REGULAR' && (
                <>
                  <hr className="mx-auto my-2 p-0" />
                  <MenuItem>
                    <Link
                      to={routes.moderation()}
                      className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-violet-950 data-[focus]:text-white"
                    >
                      <DecisionTree className="size-5 fill-violet-950 group-data-[focus]:fill-white" />
                      Moderate
                    </Link>
                  </MenuItem>
                  <MenuItem>
                    <Link
                      to={routes.administration()}
                      className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-violet-950 data-[focus]:text-white"
                    >
                      <ManageProtection className="size-5 fill-violet-950 group-data-[focus]:fill-white" />
                      Administer
                    </Link>
                  </MenuItem>
                </>
              )}
              <hr className="mx-auto my-2 p-0" />
              <MenuItem>
                <Link
                  to={routes.curate()}
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
        </>
      ) : (
        <div className="rounded-full bg-violet-950 p-2 px-4 text-white">
          <Link to={routes.login()}>Log In</Link>
        </div>
      )}
    </>
  )
}

export default NavigationBarDynamic
