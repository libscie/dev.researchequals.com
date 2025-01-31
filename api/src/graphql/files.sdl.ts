export const schema = gql`
  type PresignedPost {
    url: String!
    fields: JSON!
    filename: String! # Return unique filename for tracking
  }

  type Mutation {
    # TODO: Add authentication
    getPresignedPost(filename: String!): PresignedPost! @skipAuth
  }
`
