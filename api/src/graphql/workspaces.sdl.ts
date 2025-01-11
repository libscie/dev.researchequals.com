export const schema = gql`
  type Workspace {
    id: Int!
    createdAt: DateTime!
    type: WorkspaceType!
    handle: String!
    givenName: String
    name: String!
    avatar: String!
    Membership: [Membership]!
  }

  enum WorkspaceType {
    INDIVIDUAL
    GROUP
  }

  type Query {
    workspaces: [Workspace!]! @skipAuth
    workspace(handle: String!): Workspace @skipAuth
  }

  input CreateWorkspaceInput {
    type: WorkspaceType!
    handle: String!
    givenName: String
    name: String!
    avatar: String!
  }

  input UpdateWorkspaceInput {
    type: WorkspaceType
    handle: String
    givenName: String
    name: String
    avatar: String
  }

  type Mutation {
    createWorkspace(input: CreateWorkspaceInput!): Workspace! @requireAuth
    updateWorkspace(id: Int!, input: UpdateWorkspaceInput!): Workspace!
      @requireAuth
    deleteWorkspace(id: Int!): Workspace! @requireAuth
  }
`
