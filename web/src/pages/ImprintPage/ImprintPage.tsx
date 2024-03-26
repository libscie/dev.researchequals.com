import { Metadata } from '@redwoodjs/web'

import { ReactComponent } from './imprint.md'

const ImprintPage = () => {
  return (
    <>
      <Metadata title="Imprint" description="Imprint page" />

      <main>
        <ReactComponent />
      </main>
    </>
  )
}

export default ImprintPage
