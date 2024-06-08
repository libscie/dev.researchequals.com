import { useState } from 'react'

import { Query } from '@carbon/icons-react'

import {
  Form,
  Label,
  TextField,
  Submit,
  SubmitHandler,
  SelectField,
} from '@redwoodjs/forms'
import { Metadata } from '@redwoodjs/web'

import Badge from 'src/components/Badge/Badge'
import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import { uninvert } from 'src/utils'

interface FormValues {
  input: string
  query: string
}

const SearchPage = () => {
  const [openalex, setalex] = useState({})
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    fetch(
      `https://api.openalex.org/works?page=1&filter=default.search:${encodeURIComponent(
        data.query
      )}&sort=relevance_score:desc&`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results)
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // if you want a smooth scrolling effect
        })
        setalex(data)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  return (
    <>
      <Metadata title="Search" description="Search page" />
      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          <Form className="" onSubmit={onSubmit}>
            <label
              htmlFor="email"
              className="sr-only block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <Label
              name="name"
              // errorClassName="error"
              className="sr-only block text-sm font-medium leading-6 text-gray-900"
            >
              Search query
            </Label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <TextField
                name="query"
                id="query"
                className="block w-full rounded-full border-0 py-1.5 pr-10 text-violet-950 shadow-sm ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-violet-500 sm:text-sm sm:leading-6"
                placeholder="dataset effect of the pill"
                aria-invalid="true"
                aria-describedby="query-error"
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <Query className="h-5 w-5 text-violet-950" aria-hidden="true" />
              </div>
            </div>
            <SelectField name={'test'}>
              <option>tet</option>
            </SelectField>
            <Submit className="flex h-8 w-auto cursor-pointer items-center rounded-[100px] border-0 bg-violet-600 px-2.5 py-1 text-center font-serif text-xl text-violet-50 hover:bg-violet-500">
              Save
            </Submit>
          </Form>
        </MetadataContainer>
        <div className="w-full p-0">
          <div className="p-0">
            <div className="columns-2 p-4 xl:columns-3">
              {JSON.stringify(openalex) === '{}' ? (
                ''
              ) : (
                <>
                  {openalex.results.map((result, id) => {
                    return (
                      <div key={id} className="break-inside-avoid-column">
                        <a
                          href={result.doi}
                          target="_blank"
                          rel="noreferrer"
                          className="text-violet-950 no-underline target:text-violet-950"
                        >
                          <h2>{result.title}</h2>
                        </a>
                        <Badge>{result.publication_date}</Badge>
                        <p className="line-clamp-6">
                          {uninvert(result.abstract_inverted_index)}
                        </p>
                        <hr />
                      </div>
                    )
                  })}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default SearchPage
