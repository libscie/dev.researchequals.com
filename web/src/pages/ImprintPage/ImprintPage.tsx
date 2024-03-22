import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ImprintPage = () => {
  return (
    <>
      <Metadata title="Imprint" description="Imprint page" />

      <h1>ImprintPage</h1>
      <p>
        Find me in <code>./web/src/pages/ImprintPage/ImprintPage.tsx</code>
      </p>
      <p>
        My default route is named <code>imprint</code>, link to me with `
        <Link to={routes.imprint()}>Imprint</Link>`
      </p>
    </>
  )
}

export default ImprintPage
