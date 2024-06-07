import { Metadata } from '@redwoodjs/web'

import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import SettingsNav from 'src/components/SettingsNav/SettingsNav'

const SettingsPage = () => {
  return (
    <>
      <Metadata title="Settings" description="Settings page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <SettingsNav current="General" />
        </MetadataContainer>
        <div className="w-full p-0">
          <div className="max-w-2xl text-left">TBD</div>
        </div>
      </main>
    </>
  )
}

export default SettingsPage
