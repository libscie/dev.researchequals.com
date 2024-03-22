import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PrivacyPage = () => {
  return (
    <>
      <Metadata title="Privacy" description="Privacy page" />

      <h1>PrivacyPage</h1>
      <p>
        Find me in <code>./web/src/pages/PrivacyPage/PrivacyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>privacy</code>, link to me with `
        <Link to={routes.privacy()}>Privacy</Link>`
      </p>
    </>
  )
}

export default PrivacyPage
