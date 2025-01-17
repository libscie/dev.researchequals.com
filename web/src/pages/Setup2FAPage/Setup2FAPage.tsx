import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Setup2Fa from 'src/components/Setup2FA'

const Setup2FaPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <Metadata title="Setup2Fa" description="Setup2Fa page" />
      {/* TODO: Check if 2fa is already enabled */}
      {/* TODO: Regenerate 2fa token */}
      {currentUser && <Setup2Fa userId={currentUser.id} />}
      <Link to={routes.verify2Fa()}>Verify codes</Link>
    </>
  )
}

export default Setup2FaPage
