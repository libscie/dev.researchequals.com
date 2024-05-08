import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AuthorPage = () => {
  return (
    <>
      <Metadata title="Author" description="Author page" />

      <h1>AuthorPage</h1>
      <p>
        Find me in <code>./web/src/pages/AuthorPage/AuthorPage.tsx</code>
      </p>
      <p>
        My default route is named <code>author</code>, link to me with `
        <Link to={routes.author()}>Author</Link>`
      </p>
    </>
  )
}

export default AuthorPage
