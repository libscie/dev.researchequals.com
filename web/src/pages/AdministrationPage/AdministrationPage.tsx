import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const AdministrationPage = () => {
  return (
    <>
      <Metadata title="Administration" description="Administration page" />

      <h1>AdministrationPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/AdministrationPage/AdministrationPage.tsx</code>
      </p>
      <p>
        My default route is named <code>administration</code>, link to me with `
        <Link to={routes.administration()}>Administration</Link>`
      </p>
    </>
  )
}

export default AdministrationPage
