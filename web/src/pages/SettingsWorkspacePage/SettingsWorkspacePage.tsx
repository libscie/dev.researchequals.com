import { Metadata } from '@redwoodjs/web'

import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import SecondaryNav from 'src/components/SecondaryNav/SecondaryNav'
import { settingsNav } from 'src/components/SecondaryNavUtils/SecondaryNavUtils'

const SettingsWorkspacePage = () => {
  return (
    <>
      <Metadata title="SettingsSecurity" description="SettingsSecurity page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <SecondaryNav
            items={settingsNav}
            header="Settings"
            current="Workspace"
          />
        </MetadataContainer>
        <div className="w-full p-0">
          <div className="max-w-2xl text-left">TBD</div>
        </div>
      </main>
    </>
  )
}

export default SettingsWorkspacePage
