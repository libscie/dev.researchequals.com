import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <main>
        <h1>HomePage</h1>
        <p>
          Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
        </p>
        <p>
          My default route is named <code>home</code>, link to me with `
          <Link to={routes.home()}>Home</Link>`
        </p>
      </main>
      <nav id="navbar">
        <ul>
          <li>
            <Link to={routes.home()}>Home</Link>
          </li>
        </ul>
      </nav>

      <footer>
        <Link to={routes.codeOfConduct()}>codeOfConduct</Link>
        <Link to={routes.dataProcessingAgreement()}>
          dataProcessingAgreement
        </Link>
        <Link to={routes.imprint()}>imprint</Link>
        <Link to={routes.poisonPill()}>poisonPill</Link>
        <Link to={routes.privacy()}>privacy</Link>
        <Link to={routes.rightOfWithdrawal()}>rightOfWithdrawal</Link>
        <Link to={routes.security()}>security</Link>
        <Link to={routes.terms()}>Terms</Link>
      </footer>
    </>
  )
}

export default HomePage
