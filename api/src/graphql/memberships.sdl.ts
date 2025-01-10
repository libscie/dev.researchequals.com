export const schema = gql`
  type Membership {
    id: Int!
    createdAt: DateTime!
    user: User!
    userId: Int!
    role: MembershipRole!
    type: MembershipType!
    workspace: Workspace!
    workspaceId: Int!
  }

  enum MembershipRole {
    USER
    ADMIN
    OWNER
  }

  enum MembershipType {
    PRIMARY
    SECONDARY
  }

  type Query {
    memberships: [Membership!]! @requireAuth
    membership(id: Int!): Membership @requireAuth
  }

  input CreateMembershipInput {
    userId: Int!
    role: MembershipRole!
    type: MembershipType!
    workspaceId: Int!
  }

  input UpdateMembershipInput {
    userId: Int
    role: MembershipRole
    type: MembershipType
    workspaceId: Int
  }

  type Mutation {
    createMembership(input: CreateMembershipInput!): Membership! @requireAuth
    updateMembership(id: Int!, input: UpdateMembershipInput!): Membership!
      @requireAuth
    deleteMembership(id: Int!): Membership! @requireAuth
  }
`
