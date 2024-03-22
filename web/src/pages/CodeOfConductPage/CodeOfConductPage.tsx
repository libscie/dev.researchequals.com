import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const CodeOfConductPage = () => {
  return (
    <>
      <Metadata title="CodeOfConduct" description="CodeOfConduct page" />

      <h1>CodeOfConductPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/CodeOfConductPage/CodeOfConductPage.tsx</code>
      </p>
      <p>
        My default route is named <code>codeOfConduct</code>, link to me with `
        <Link to={routes.codeOfConduct()}>CodeOfConduct</Link>`
      </p>
    </>
  )
}

export default CodeOfConductPage
