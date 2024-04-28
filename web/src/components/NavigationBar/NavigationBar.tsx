import { Link, routes } from "@redwoodjs/router"

const NavigationBar = () => {
  return (
    <header className="fixed bottom-8 w-full m-0 p-0 select-none ">
      <div className="w-5/6 lg:w-2/3 bg-violet-200 bg-opacity-80 mx-auto rounded-[9999px] h-16 pl-8 pr-4 align-middle backdrop-blur-sm font-serif text-xl text-violet-950">
       <div className="h-full flex items-center">
          <nav className="flex-grow flex">
            <div className="hidden sm:inline [&>a]:text-violet-950">
              <Link to={routes.home()}  className="mx-2">
                Home
              </Link>
            </div>
            <div className="flex-grow mx-auto text-left sm:text-center [&>a]:text-violet-950">
              <Link to={routes.home()}  className="mx-2">
                Read
              </Link>
              <Link to={routes.home()}  className="mx-2">
                Publish
              </Link>
              <Link to={routes.home()}  className="mx-2">
                Curate
              </Link>
            </div>
          </nav>
          <div
            className="rounded-[100px] bg-violet-600 px-2.5 py-1 h-8 w-20 text-center text-violet-50 hover:bg-violet-500 cursor-pointer"
          >
            Sign up
          </div>
      </div>
      </div>
    </header>
  )
}

export default NavigationBar
