import { Metadata } from '@redwoodjs/web'

const AuthContainer = ({ children, title, subtitle }) => {
  return (
    <>
      <Metadata title={title} />
      <div className="mx-auto w-full">
        <header className="text-center">
          <h1 className="font-2xl m-0">{title}</h1>
          <div className="mx-auto my-4 max-w-2xl text-center text-sm">
            {subtitle}
          </div>
        </header>
        <div className="mx-auto my-8 max-w-xl text-center">
          <div className="">{children}</div>
        </div>
      </div>
    </>
  )
}

export default AuthContainer
