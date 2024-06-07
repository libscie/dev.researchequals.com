import { Metadata } from '@redwoodjs/web'

import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import SettingsNav from 'src/components/SettingsNav/SettingsNav'

const SettingsSecurityPage = () => {
  return (
    <>
      <Metadata title="SettingsSecurity" description="SettingsSecurity page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <SettingsNav current="Security" />
        </MetadataContainer>
        <div className="w-full p-0">
          <div className="max-w-2xl text-left">TBD</div>
        </div>
      </main>
    </>
  )
}

export default SettingsSecurityPage
