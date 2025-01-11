// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import MetadataContainer from 'src/components/MetadataContainer/MetadataContainer'
import WorkspacesCell from 'src/components/WorkspacesCell'

const FindPage = () => {
  return (
    <>
      <Metadata title="Find" description="Find page" />

      <main className="h-full w-full lg:flex">
        <MetadataContainer>
          {' '}
          {/* Search box */}
          <form className="mb-4 w-full">
            <input
              type="text"
              // value={searchQuery}
              // onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-700"
            >
              Search
            </button>
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-x-3">
                <input
                  id="find-authors"
                  name="push-notifications"
                  type="radio"
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                  defaultChecked
                />
                <label
                  htmlFor="find-authors"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Authors
                </label>
              </div>
              {/* Make the Works dropdown for the additional filters */}
              <div className="flex items-center gap-x-3">
                <input
                  id="push-everything"
                  name="push-notifications"
                  type="radio"
                  className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                />
                <label
                  htmlFor="push-everything"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Works
                </label>
              </div>
            </div>
            {/* Add extended search */}
            {/* Extended search filters */}
          </form>
          {/* Filters */}
          {/*   filters are shared through zustand? */}
        </MetadataContainer>
        <div className="w-full p-0">
          {/* List of profiles */}
          <WorkspacesCell />
        </div>
      </main>
    </>
  )
}

export default FindPage
