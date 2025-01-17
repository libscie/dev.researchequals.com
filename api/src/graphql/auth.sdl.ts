export const schema = gql`
  type TwoFASetup {
    secret: String!
    qrCodeUrl: String!
  }

  type Mutation {
    setupTwoFactorAuth(userId: Int!): TwoFASetup! @requireAuth
    verifyTwoFactorAuth(userId: Int!, token: String!): Boolean! @requireAuth
    verifyOtp(otpToken: String!, token: String!): Boolean! @skipAuth
  }
`
