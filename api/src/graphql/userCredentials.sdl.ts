export const schema = gql`
  type UserCredential {
    id: String!
    userId: Int!
    user: User!
    publicKey: Byte!
    transports: String
    counter: BigInt!
  }

  type Query {
    userCredentials: [UserCredential!]! @requireAuth
    userCredential(id: String!): UserCredential @requireAuth
  }

  input CreateUserCredentialInput {
    userId: Int!
    publicKey: Byte!
    transports: String
    counter: BigInt!
  }

  input UpdateUserCredentialInput {
    userId: Int
    publicKey: Byte
    transports: String
    counter: BigInt
  }

  type Mutation {
    createUserCredential(input: CreateUserCredentialInput!): UserCredential!
      @requireAuth
    updateUserCredential(
      id: String!
      input: UpdateUserCredentialInput!
    ): UserCredential! @requireAuth
    deleteUserCredential(id: String!): UserCredential! @requireAuth
  }
`
