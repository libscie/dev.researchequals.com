import { Toaster } from '@redwoodjs/web/dist/toast'

type AuthLayoutProps = {
  children?: React.ReactNode
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <main className="">
      <Toaster toastOptions={{ className: '', duration: 6000 }} />
      <div className="flex h-screen items-center justify-center">
        {children}
      </div>
    </main>
  )
}

export default AuthLayout
