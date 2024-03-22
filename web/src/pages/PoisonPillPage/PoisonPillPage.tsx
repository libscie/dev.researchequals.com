import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const PoisonPillPage = () => {
  return (
    <>
      <Metadata title="PoisonPill" description="PoisonPill page" />

      <h1>PoisonPillPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/PoisonPillPage/PoisonPillPage.tsx</code>
      </p>
      <p>
        My default route is named <code>poisonPill</code>, link to me with `
        <Link to={routes.poisonPill()}>PoisonPill</Link>`
      </p>
    </>
  )
}

export default PoisonPillPage
