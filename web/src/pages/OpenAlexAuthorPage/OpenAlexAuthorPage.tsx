import { useEffect, useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import DataContainer from 'src/components/DataContainer/DataContainer'
import Loader from 'src/components/Loader/Loader'
import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import OpenAlexWorksCell from 'src/components/OpenAlexWorksCell/OpenAlexWorksCell'
import { fetchOpenAlexAuthor } from 'src/services/openAlex'

const OpenAlexAuthorPage = ({ id }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchOpenAlexAuthor(id)
        setData(result)
      } catch (error) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [id])

  if (loading) {
    return <Loader stroke={'#574cfa'} />
  }

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error.message}</div>
  }

  return (
    <>
      <Metadata title={data.display_name} description={data.description} />
      <Metadata ogTitle={data.display_name} ogDescription={data.description} />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <h1 className="text-left text-3xl">{data.display_name}</h1>
          <span className="m-1 inline-flex items-center rounded-md bg-violet-50 px-2 py-1 text-sm font-normal text-violet-950 ring-1 ring-inset ring-violet-950/10">
            {data.orcid}
          </span>
        </MetadataContainer>
        <DataContainer>
          <OpenAlexWorksCell url={data.works_api_url} />
        </DataContainer>
      </main>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default OpenAlexAuthorPage
