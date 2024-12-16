import { Metadata } from '@redwoodjs/web'

import HeaderBar from 'src/components/HeaderBar/HeaderBar'

const HomePage = () => {
  return (
    <>
      <Metadata title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.tsx</code>
      </p>
      <HeaderBar>{undefined}</HeaderBar>
    </>
  )
}

export default HomePage
