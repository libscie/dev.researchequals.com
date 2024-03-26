import { Metadata } from '@redwoodjs/web'

import { ReactComponent } from './code-of-conduct.md'

const CodeOfConductPage = () => {
  return (
    <>
      <Metadata title="CodeOfConduct" description="CodeOfConduct page" />
      <main>
        <ReactComponent />
      </main>
    </>
  )
}

export default CodeOfConductPage
