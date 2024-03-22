import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const RightOfWithdrawalPage = () => {
  return (
    <>
      <Metadata
        title="RightOfWithdrawal"
        description="RightOfWithdrawal page"
      />

      <h1>RightOfWithdrawalPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/RightOfWithdrawalPage/RightOfWithdrawalPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>rightOfWithdrawal</code>, link to me
        with `<Link to={routes.rightOfWithdrawal()}>RightOfWithdrawal</Link>`
      </p>
    </>
  )
}

export default RightOfWithdrawalPage
