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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      <footer>
        <Link href="/terms">Terms</Link>
        <Link href="/terms">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/terms">Terms</Link>
      </footer>
    </>
  )
}

export default HomePage
