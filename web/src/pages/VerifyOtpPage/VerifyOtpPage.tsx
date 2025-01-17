import VerifyOtp from 'src/components/VerifyOTP'

// import { Link, routes } from '@redwoodjs/router'
const VerifyOtpPage = ({ token }) => {
  return (
    <div>
      <VerifyOtp token={token} />
    </div>
  )
}

export default VerifyOtpPage
