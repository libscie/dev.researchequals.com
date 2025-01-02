import { useEffect, useState } from 'react'

import { Metadata } from '@redwoodjs/web'

import DataContainer from 'src/components/DataContainer/DataContainer'
import Loader from 'src/components/Loader/Loader'
import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import { fetchOpenAlexWork } from 'src/services/openAlex'

const OpenAlexWorkPage = ({ id }) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        const result = await fetchOpenAlexWork(id)
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
      <Metadata title={data.title} description={data.description} />
      <Metadata ogTitle={data.title} ogDescription={data.description} />
      <article className="h-full w-full lg:flex">
        <MetadataContainer>
          <h1 className="text-2xl">{data.title}</h1>
          <span className="m-1 inline-flex items-center rounded-md bg-violet-50 px-2 py-1 text-sm font-normal text-violet-950 ring-1 ring-inset ring-violet-950/10">
            {data.publication_date}
          </span>
        </MetadataContainer>
        <DataContainer>
          {data?.primary_location?.pdf_url ? (
            <p>PDF available</p>
          ) : (
            <p>No PDF available</p>
          )}
        </DataContainer>
      </article>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  )
}

export default OpenAlexWorkPage
