import {
  FingerPrintIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'

import { Metadata } from '@redwoodjs/web'

import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import { classNames } from 'src/utils'

const secondaryNavigation = [
  { name: 'General', href: '#', icon: UsersIcon, current: true },
  { name: 'Security', href: '#', icon: FingerPrintIcon, current: false },
  { name: 'Workspace', href: '#', icon: UserCircleIcon, current: false },
]

const SettingsPage = () => {
  return (
    <>
      <Metadata title="Settings" description="Settings page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <h1 className="text-left lg:text-center">Settings</h1>
          <aside className="mx-auto flex overflow-x-auto border-b border-gray-900/5 py-4 lg:block lg:w-64 lg:flex-none lg:border-0">
            <nav className="flex-none px-4 sm:px-6 lg:px-0">
              <ul className="flex gap-x-3 gap-y-1 whitespace-nowrap lg:flex-col">
                {secondaryNavigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'rounded-md bg-violet-950 text-white'
                          : 'text-violet-950 hover:bg-violet-700 hover:text-white',
                        'group flex gap-x-3 rounded-md py-2 pl-2 pr-3 text-sm font-semibold leading-6'
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? 'text-white'
                            : 'text-gray-400 group-hover:text-white',
                          'h-6 w-6 shrink-0'
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </MetadataContainer>
        <div className="w-full p-0">
          <div className="max-w-2xl text-left">
            My research focuses on how the publishing system can facilitate
            improved quality of scholarly research. In particular, my research
            explores modular publishing systems that break a research project
            into its building blocks. These building blocks are then sharing
            continuously and in chronological order, to provide a more accurate
            depiction of the research journey. I am currently director of the
            organization Liberate Science GmbH to implement this research
            finding into practice, and develop the practical use of it within a
            diverse set of research communities.
          </div>
        </div>
      </main>
    </>
  )
}

export default SettingsPage
