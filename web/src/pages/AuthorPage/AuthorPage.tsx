import { Metadata } from '@redwoodjs/web'

import Badge from 'src/components/Badge/Badge'
import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'

const AuthorPage = () => {
  return (
    <>
      <Metadata title="Author" description="Author page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <p className="flex w-full">
            <img
              src="https://www.chjh.nl/content/images/2022/04/220329_ChrisHartgerink_384_v1.jpg"
              className="mx-auto h-64 w-64 rounded-full object-cover"
              alt="Avatar of Chris Hartgerink"
            />
          </p>
          <h1 className="mt-0 text-center text-4xl">Chris Hartgerink</h1>
          <span className="flex w-full">
            <span className="mx-auto">
              <Badge>they/them</Badge>
              <Badge>@chartgerink</Badge>
              <a href="https://orcid.org" target="_blank" rel="noreferrer">
                <Badge>0000-0003-1050-6809</Badge>
              </a>
              <Badge>Liberate Science</Badge>
              <Badge>https://chjh.nl</Badge>
            </span>
          </span>
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
