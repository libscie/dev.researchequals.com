import { DocumentMultiple_01, Finance, User } from '@carbon/icons-react'

import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import SecondaryNav from 'src/components/SecondaryNav/SecondaryNav'

const ModerationPage = () => {
  return (
    <>
      <Metadata title="Moderation" description="Moderation page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <SecondaryNav
            items={[
              {
                name: 'Queue',
                href: routes.moderation(),
                icon: DocumentMultiple_01,
              },
              {
                name: 'First contributors',
                href: routes.moderation(),
                icon: User,
              },
              {
                name: 'Reports',
                href: routes.moderation(),
                icon: Finance,
              },
            ]}
            header="Moderate"
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

export default ModerationPage
