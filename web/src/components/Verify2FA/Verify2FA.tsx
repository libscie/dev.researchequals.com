import { useState } from 'react'

import { useMutation } from '@redwoodjs/web'

export const VERIFY_TWO_FACTOR_AUTH = gql`
  mutation VerifyTwoFactorAuth($userId: Int!, $token: String!) {
    verifyTwoFactorAuth(userId: $userId, token: $token)
  }
`
interface VerifyTwoFactorAuthProps {
  userId: number
  onSuccess: () => void // Callback when verification succeeds
  onFailure: () => void // Callback when verification fails
}

const Verify2Fa: React.FC<VerifyTwoFactorAuthProps> = ({
  userId,
  onSuccess,
  onFailure,
}) => {
  const [token, setToken] = useState('')
  const [verifyTwoFactorAuth, { loading, error }] = useMutation(
    VERIFY_TWO_FACTOR_AUTH,
    {
      onCompleted: (data) => {
        if (data.verifyTwoFactorAuth) {
          onSuccess()
        } else {
          onFailure()
        }
      },
    }
  )

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!token) return

    try {
      await verifyTwoFactorAuth({ variables: { userId, token } })
    } catch (err) {
      console.error('2FA verification error:', err)
    }
  }

  return (
    <div>
      <h2>Two-Factor Authentication</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="2fa-token">Enter your 2FA code:</label>
          <input
            id="2fa-token"
            type="text"
            autoComplete="one-time-code"
            name="otp"
            inputMode="numeric"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            placeholder="123456"
            maxLength={6}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify'}
        </button>
      </form>
      {error && (
        <p style={{ color: 'red' }}>Verification failed: {error.message}</p>
      )}
    </div>
  )
}

export default Verify2Fa
