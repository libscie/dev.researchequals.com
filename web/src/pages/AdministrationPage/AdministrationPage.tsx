import {
  AirlinePassengerCare,
  Bullhorn,
  CloudAuditing,
  RuleFilled,
} from '@carbon/icons-react'

import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import SecondaryNav from 'src/components/SecondaryNav/SecondaryNav'

const AdministrationPage = () => {
  return (
    <>
      <Metadata title="Administration" description="Administration page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <SecondaryNav
            items={[
              {
                name: 'Announcement',
                href: routes.administration(),
                icon: Bullhorn,
              },
              {
                name: 'Testimonials',
                href: routes.administration(),
                icon: AirlinePassengerCare,
              },
              {
                name: 'Log',
                href: routes.administration(),
                icon: CloudAuditing,
              },
              {
                name: 'Server rules',
                href: routes.administration(),
                icon: RuleFilled,
              },
            ]}
            header="Administer"
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

export default AdministrationPage
