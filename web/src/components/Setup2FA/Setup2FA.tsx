import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'

export const SETUP_TWO_FACTOR_AUTH = gql`
  mutation SetupTwoFA($userId: Int!) {
    setupTwoFactorAuth(userId: $userId) {
      secret
      qrCodeUrl
    }
  }
`

interface SetupTwoFactorAuthProps {
  userId: number
}

const Setup2Fa: React.FC<SetupTwoFactorAuthProps> = ({ userId }) => {
  const [setupTwoFA, { data, loading, error }] = useMutation(
    SETUP_TWO_FACTOR_AUTH
  )
  const [isSetupComplete, setIsSetupComplete] = useState(false)

  const handleSetup = async () => {
    try {
      await setupTwoFA({ variables: { userId } })
      setIsSetupComplete(true)
    } catch (err) {
      console.error('Error setting up 2FA:', err)
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      {!isSetupComplete ? (
        <button onClick={handleSetup}>Setup 2FA</button>
      ) : (
        <div>
          <p>Scan the QR Code below with your authenticator app:</p>
          <img src={data.setupTwoFactorAuth.qrCodeUrl} alt="QR Code" />
          <p>Backup Secret: {data.setupTwoFactorAuth.secret}</p>
        </div>
      )}
    </div>
  )
}

export default Setup2Fa
