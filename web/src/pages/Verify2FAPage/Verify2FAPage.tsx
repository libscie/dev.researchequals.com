// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import Verify2Fa from 'src/components/Verify2FA'

const Verify2FaPage = () => {
  const { currentUser } = useAuth()

  const handleSuccess = () => {
    console.log('2FA verification succeeded!')
    // Redirect user to the dashboard or secure area
  }

  const handleFailure = () => {
    console.log('2FA verification failed.')
    // Optionally display additional messages to the user
  }

  return (
    <>
      <Metadata title="Verify2Fa" description="Verify2Fa page" />
      {/* TODO: If already enabled, don't allow for this page to be shown */}
      {currentUser && (
        <Verify2Fa
          userId={currentUser.id}
          onSuccess={handleSuccess}
          onFailure={handleFailure}
        />
      )}
    </>
  )
}

export default Verify2FaPage
