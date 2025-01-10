// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const FindPage = () => {
  return (
    <>
      <Metadata title="Find" description="Find page" />

      <h1>FindPage</h1>
      <p>
        Find me in <code>./web/src/pages/FindPage/FindPage.tsx</code>
      </p>
      {/*
          My default route is named `find`, link to me with:
          `<Link to={routes.find()}>Find</Link>`
      */}
    </>
  )
}

export default FindPage
