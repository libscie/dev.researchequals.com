import type { WorkspacesQuery, WorkspacesQueryVariables } from 'types/graphql'

import { Link, routes } from '@redwoodjs/router'
import type {
  CellSuccessProps,
  CellFailureProps,
  TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  WorkspacesQuery,
  WorkspacesQueryVariables
> = gql`
  query WorkspacesQuery {
    workspaces {
      id
      createdAt
      avatar
      givenName
      name
      handle
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ workspaces }: CellSuccessProps<WorkspacesQuery>) => {
  return (
    <ul className="">
      {workspaces.map((item) => (
        <li key={item.id} className="p-4">
          <Link to={routes.handle({ handle: item.handle })}>
            <div className="flex">
              <span>
                <img
                  src={item.avatar}
                  alt={`${item.name}'s avatar`}
                  className="mx-2 h-16 w-16 rounded-full"
                />
              </span>
              <span className="flex-grow">
                <h2 className="font-serif text-2xl">
                  {item.givenName && item.givenName} {item.name}
                </h2>
                <hr className="my-1" />
                <p className="font-sans text-gray-600">@{item.handle}</p>
              </span>
              <button
                className="mx-2 rounded bg-indigo-950 px-4 py-2 text-white hover:bg-indigo-700"
                onClick={() => alert(`Follow ${item.handle}`)}
              >
                Follow
              </button>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
