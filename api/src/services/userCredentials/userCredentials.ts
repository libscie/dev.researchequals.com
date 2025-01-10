import type {
  QueryResolvers,
  MutationResolvers,
  UserCredentialRelationResolvers,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userCredentials: QueryResolvers['userCredentials'] = () => {
  return db.userCredential.findMany()
}

export const userCredential: QueryResolvers['userCredential'] = ({ id }) => {
  return db.userCredential.findUnique({
    where: { id },
  })
}

export const createUserCredential: MutationResolvers['createUserCredential'] =
  ({ input }) => {
    return db.userCredential.create({
      data: input,
    })
  }

export const updateUserCredential: MutationResolvers['updateUserCredential'] =
  ({ id, input }) => {
    return db.userCredential.update({
      data: input,
      where: { id },
    })
  }

export const deleteUserCredential: MutationResolvers['deleteUserCredential'] =
  ({ id }) => {
    return db.userCredential.delete({
      where: { id },
    })
  }

export const UserCredential: UserCredentialRelationResolvers = {
  user: (_obj, { root }) => {
    return db.userCredential.findUnique({ where: { id: root?.id } }).user()
  },
}
