import { useEffect, useState } from 'react'

import { fetchOpenAlexWorks } from 'src/services/openAlex'

import Loader from '../Loader/Loader'

const OpenAlexWorksCell = ({ url }) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  })

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchOpenAlexWorks(
          `${url}&sort=publication_year:desc`
        )
        setState({ loading: false, error: null, data })
      } catch (error) {
        setState({ loading: false, error, data: null })
      }
    }

    loadData()
  }, [])

  if (state.loading) {
    return <Loader stroke={'#574cfa'} />
  }

  if (state.error) {
    return <div style={{ color: 'red' }}>Error: {state.error}</div>
  }

  if (!state.data || state.data.length === 0) {
    return <></>
  }

  return (
    <>
      {state.data.map((item) => {
        return (
          <div key={item.id} className="my-4 p-4">
            <a
              href={
                item.primary_location.is_oa && item.primary_location.pdf_url
                  ? `/${item.id}`
                  : item.primary_location.landing_page_url
              }
              className="font-serif text-xl font-semibold"
            >
              {item.title}
            </a>
            <hr />
            <p className="my-2 font-light leading-6">
              {item.authorships.map((authorObj, index) => {
                const isLast = index === item.authorships.length - 1

                return (
                  <a
                    key={authorObj.id}
                    href={`/${authorObj.author.id}`}
                    className="mr-1"
                  >
                    {authorObj.author.display_name}
                    {!isLast && ', '}
                  </a>
                )
              })}
            </p>
          </div>
        )
      })}
      {/* <pre>{JSON.stringify(state.data, null, 2)}</pre> */}
    </>
  )
}

export default OpenAlexWorksCell
