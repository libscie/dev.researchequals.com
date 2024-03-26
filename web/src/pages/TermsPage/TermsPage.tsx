import { Metadata } from '@redwoodjs/web'

import { ReactComponent } from './terms.md'

const TermsPage = () => {
  return (
    <>
      <Metadata title="Terms" description="Terms page" />
      <main>
        <ReactComponent />
      </main>
    </>
  )
}

export default TermsPage
