import {
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import { Link, routes } from '@redwoodjs/router'

import { classNames } from 'src/utils'

const settingsNav = [
  { name: 'General', href: routes.settings(), icon: UsersIcon },
  {
    name: 'Security',
    href: routes.settingsSecurity(),
    icon: FingerPrintIcon,
  },
  {
    name: 'Workspace',
    href: routes.settingsWorkspace(),
    icon: UserCircleIcon,
  },
]

const SettingsNav = ({ current }) => {
  return (
    <>
      <h1 className="text-left lg:text-center">Settings</h1>
      <aside className="mx-auto flex overflow-x-auto py-4 lg:block lg:w-64 lg:flex-none lg:border-0">
        <nav className="flex-none px-4 sm:px-6 lg:px-0">
          <ul className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
            {settingsNav.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.href}
                  className={classNames(
                    item.name === current
                      ? 'rounded-md bg-violet-950 text-white'
                      : 'text-violet-950 hover:bg-violet-700 hover:text-white',
                    'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6'
                  )}
                >
                  <item.icon
                    className={classNames(
                      item.name === current
                        ? 'text-white'
                        : 'text-gray-400 group-hover:text-white',
                      'h-6 w-6 shrink-0'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}

export default SettingsNav
