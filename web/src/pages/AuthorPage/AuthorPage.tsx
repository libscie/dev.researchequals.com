import { Metadata } from '@redwoodjs/web'

import AuthorMetadata from 'src/components/AuthorMetadata/AuthorMetadata'
import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'

const AuthorPage = () => {
  return (
    <>
      <Metadata title="Author" description="Author page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <AuthorMetadata />
        </MetadataContainer>
        <div className="w-full p-0">
          <div className="max-w-2xl text-left">
            My research focuses on how the publishing system can facilitate
            improved quality of scholarly research. In particular, my research
            explores modular publishing systems that break a research project
            into its building blocks. These building blocks are then sharing
            continuously and in chronological order, to provide a more accurate
            depiction of the research journey. I am currently director of the
            organization Liberate Science GmbH to implement this research
            finding into practice, and develop the practical use of it within a
            diverse set of research communities.
          </div>
        </div>
      </main>
    </>
  )
}

export default AuthorPage
