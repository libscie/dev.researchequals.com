import { Link, routes } from '@redwoodjs/router'

import Button from 'src/components/Button'

const NavigationBar = () => {
  return (
    <header className="fixed bottom-8 z-[9999] m-0 w-full select-none p-0">
      <div className="mx-auto h-16 w-5/6 rounded-[9999px] bg-violet-200 bg-opacity-80 pl-8 pr-4 align-middle font-serif text-xl text-violet-950 backdrop-blur-sm lg:w-2/3">
        <div className="flex h-full items-center">
          <nav className="flex flex-grow">
            <div className="hidden sm:inline [&>a]:text-violet-950 [&>a]:no-underline hover:[&>a]:text-violet-700">
              <Link to={routes.home()} className="mr-2">
                Home
              </Link>
            </div>
            <div className="mx-auto flex-grow text-left sm:text-center [&>a]:text-violet-950 [&>a]:no-underline hover:[&>a]:text-violet-700">
              <Link to={routes.home()} className="mx-2">
                Read
              </Link>
              <Link to={routes.home()} className="mx-2">
                Publish
              </Link>
              <Link to={routes.home()} className="mx-2">
                Curate
              </Link>
            </div>
          </nav>
          <Button styling="">Sign up</Button>
        </div>
      </div>
    </header>
  )
}

export default NavigationBar
