import { Metadata } from '@redwoodjs/web'

import { ReactComponent } from './poison-pill.md'

const PoisonPillPage = () => {
  return (
    <>
      <Metadata title="PoisonPill" description="PoisonPill page" />

      <main>
        <ReactComponent />
      </main>
    </>
  )
}

export default PoisonPillPage
