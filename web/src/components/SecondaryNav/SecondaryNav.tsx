import { CarbonIconType } from '@carbon/icons-react'

import { Link } from '@redwoodjs/router'

import { classNames } from 'src/utils'

interface SecondaryNavProps {
  header: string
  items: SecondaryNavItemProps[]
  current: string
  fullWidth?: boolean
}

interface SecondaryNavItemProps {
  name: string
  href: string
  icon: CarbonIconType | string
}

const SecondaryNav = ({
  header,
  items,
  current,
  fullWidth = false,
}: SecondaryNavProps) => {
  return (
    <>
      <h1 className="text-left lg:text-center">{header}</h1>
      <aside
        className={classNames(
          fullWidth ? 'w-full' : 'lg:w-64',
          'mx-auto flex max-w-[100vw] overflow-x-auto py-4  lg:block lg:flex-none lg:border-0'
        )}
      >
        <nav className="flex-none px-4 sm:px-6 lg:px-0">
          <ul className="flex gap-x-3 gap-y-1 text-left lg:flex-col">
            {items.map((item) => (
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
                  {typeof item.icon === 'string' ? (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img
                      src={item.icon}
                      className={classNames('h-6 w-6 shrink-0')}
                      aria-hidden="true"
                    />
                  ) : (
                    <item.icon
                      className={classNames(
                        item.name === current
                          ? 'text-white'
                          : 'text-gray-400 group-hover:text-white',
                        'h-6 w-6 shrink-0'
                      )}
                      aria-hidden="true"
                    />
                  )}
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

export default SecondaryNav
