import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ModerationPage = () => {
  return (
    <>
      <Metadata title="Moderation" description="Moderation page" />

      <h1>ModerationPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ModerationPage/ModerationPage.tsx</code>
      </p>
      <p>
        My default route is named <code>moderation</code>, link to me with `
        <Link to={routes.moderation()}>Moderation</Link>`
      </p>
    </>
  )
}

export default ModerationPage
