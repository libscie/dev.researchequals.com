import { Metadata } from '@redwoodjs/web'

import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import SecondaryNav from 'src/components/SecondaryNav/SecondaryNav'
import { settingsNav } from 'src/components/SecondaryNavUtils/SecondaryNavUtils'

const SettingsPage = () => {
  return (
    <>
      <Metadata title="Settings" description="Settings page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <SecondaryNav
            items={settingsNav}
            header="Settings"
            current="General"
          />
        </MetadataContainer>
        <div className="w-full p-0">
          <div className="max-w-2xl text-left">TBD</div>
        </div>
      </main>
    </>
  )
}

export default SettingsPage
