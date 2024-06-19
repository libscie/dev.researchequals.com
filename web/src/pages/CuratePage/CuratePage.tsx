import { Book, DocumentMultiple_01, Finance, User } from '@carbon/icons-react'

import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import SecondaryNav from 'src/components/SecondaryNav/SecondaryNav'

const CuratePage = () => {
  return (
    <>
      <Metadata title="Curate" description="Curate page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <SecondaryNav
            items={[
              {
                name: 'Readings on improving equality in research',
                href: routes.curate(),
                icon: DocumentMultiple_01,
              },
              {
                name: "Anna van 't Veer's collection",
                href: routes.author(),
                icon: User,
              },
              {
                name: 'Curated articles from nonprofit publisher Annual Reviews.',
                href: routes.administration(),
                icon: Finance,
              },
              {
                name: 'Sources',
                href: routes.moderation(),
                icon: Book,
              },
            ]}
            header="Curate"
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

export default CuratePage
