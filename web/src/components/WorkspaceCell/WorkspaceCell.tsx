import { useEffect } from 'react'

import type {
  FindWorkspaceQuery,
  FindWorkspaceQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import {
  type CellSuccessProps,
  type CellFailureProps,
  type TypedDocumentNode,
} from '@redwoodjs/web'

export const QUERY: TypedDocumentNode<
  FindWorkspaceQuery,
  FindWorkspaceQueryVariables
> = gql`
  query FindWorkspaceQuery($handle: String!) {
    workspace: workspace(handle: $handle) {
      handle
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  useEffect(() => {
    navigate(routes.notFound())
  }, [])

  return <div>Empty</div>
}

export const Failure = ({
  error,
}: CellFailureProps<FindWorkspaceQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  workspace,
}: CellSuccessProps<FindWorkspaceQuery, FindWorkspaceQueryVariables>) => {
  return (
    <main className="h-full w-full lg:flex">
      {/* <MetadataContainer>
        <AuthorMetadata />
      </MetadataContainer> */}
      <div className="w-full p-0">
        <div className="max-w-2xl text-left">{workspace.handle}</div>
      </div>
    </main>
  )
}
