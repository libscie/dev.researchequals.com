const HeaderBar = ({ children }) => {
  return (
    <div className="fixed bottom-8 z-[9999] m-0 w-full select-none p-0">
      <header className="mx-auto h-16 w-5/6 rounded-full bg-violet-200 bg-opacity-80 px-4 align-middle font-serif text-xl text-violet-950 shadow-sm backdrop-blur-sm lg:w-2/3 dark:bg-indigo-900 dark:text-violet-50">
        <div className="flex h-full items-center">{children}</div>
      </header>
    </div>
  )
}

export default HeaderBar
