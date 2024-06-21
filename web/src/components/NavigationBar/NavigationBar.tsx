import { Link, routes } from '@redwoodjs/router'

import NavigationBarDynamic from '../NavigationBarDynamic/NavigationBarDynamic'

const NavigationBar = () => {
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
                to={routes.drafts()}
                className="rounded-md p-2 px-4 hover:bg-violet-950"
              >
                Share
              </Link>
              <Link
                to={routes.curate()}
                className="hidden rounded-md p-2 px-4 hover:bg-violet-950 sm:inline"
              >
                Curate
              </Link>
            </div>
          </nav>
          <NavigationBarDynamic />
        </div>
      </div>
    </header>
  )
}

export default NavigationBar
