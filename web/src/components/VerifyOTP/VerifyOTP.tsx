import { navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

const VERIFY_OTP_MUTATION = gql`
  mutation VerifyOtp($otpToken: String!, $token: String!) {
    verifyOtp(otpToken: $otpToken, token: $token)
  }
`

const VerifyOtp = ({ token }) => {
  const [otpToken, setOtp] = React.useState('')
  const [verifyOtp, { loading, error }] = useMutation(VERIFY_OTP_MUTATION)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await verifyOtp({ variables: { otpToken, token } })
      // alert(JSON.stringify(data.verifyOtp))
      if (data.verifyOtp) {
        navigate(`/.netlify/functions/totp-session?token=${data.verifyOtp}`)
        // navigate(routes.home())
      }
    } catch (err) {
      console.error(err)
      alert(err)
    }
  }

  return (
    <div>
      <h1>Verify OTP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="otp"
          placeholder="Enter OTP"
          value={otpToken}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={6}
          autoComplete="one-time-code"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Verifying...' : 'Verify'}
        </button>
      </form>
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  )
}

export default VerifyOtp
