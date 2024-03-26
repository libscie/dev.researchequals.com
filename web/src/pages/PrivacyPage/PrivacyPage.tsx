import { Metadata } from '@redwoodjs/web'

import { ReactComponent } from './privacy.md'

const PrivacyPage = () => {
  return (
    <>
      <Metadata title="Privacy" description="Privacy page" />

      <main>
        <ReactComponent />
      </main>
    </>
  )
}

export default PrivacyPage
