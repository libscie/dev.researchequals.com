import { Book, DocumentMultiple_01, Finance, User } from '@carbon/icons-react'

import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import SecondaryNav from 'src/components/SecondaryNav/SecondaryNav'

const DraftsPage = () => {
  return (
    <>
      <Metadata title="Drafts" description="Drafts page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <SecondaryNav
            items={[
              {
                name: 'Title of the work is fairly long: But longer is always possible',
                href: routes.works(),
                icon: DocumentMultiple_01,
              },
              {
                name: 'Authors',
                href: routes.author(),
                icon: User,
              },
              {
                name: 'Organizations',
                href: routes.administration(),
                icon: Finance,
              },
              {
                name: 'Sources',
                href: routes.moderation(),
                icon: Book,
              },
            ]}
            header="Drafts"
            current="General"
            fullWidth={true}
          />
        </MetadataContainer>
        <div className="w-full p-0">
          <div className="max-w-2xl text-left">TBD</div>
        </div>
      </main>
    </>
  )
}

export default DraftsPage
