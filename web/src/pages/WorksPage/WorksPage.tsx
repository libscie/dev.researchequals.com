import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const WorksPage = () => {
  return (
    <>
      <Metadata title="Works" description="Works page" />

      <h1>WorksPage</h1>
      <p>
        Find me in <code>./web/src/pages/WorksPage/WorksPage.tsx</code>
      </p>
      <p>
        My default route is named <code>works</code>, link to me with `
        <Link to={routes.works()}>Works</Link>`
      </p>
    </>
  )
}

export default WorksPage
