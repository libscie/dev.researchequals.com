import type { UserCredential } from '@prisma/client'

import {
  userCredentials,
  userCredential,
  createUserCredential,
  updateUserCredential,
  deleteUserCredential,
} from './userCredentials'
import type { StandardScenario } from './userCredentials.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('userCredentials', () => {
  scenario(
    'returns all userCredentials',
    async (scenario: StandardScenario) => {
      const result = await userCredentials()

      expect(result.length).toEqual(Object.keys(scenario.userCredential).length)
    }
  )

  scenario(
    'returns a single userCredential',
    async (scenario: StandardScenario) => {
      const result = await userCredential({
        id: scenario.userCredential.one.id,
      })

      expect(result).toEqual(scenario.userCredential.one)
    }
  )

  scenario('creates a userCredential', async (scenario: StandardScenario) => {
    const result = await createUserCredential({
      input: {
        id: 'String',
        userId: scenario.userCredential.two.userId,
        publicKey: Buffer.from([113, 149, 212]),
        counter: 1711884n,
      },
    })

    expect(result.id).toEqual('String')
    expect(result.userId).toEqual(scenario.userCredential.two.userId)
    expect(result.publicKey).toEqual(Buffer.from([113, 149, 212]))
    expect(result.counter).toEqual(1711884n)
  })

  scenario('updates a userCredential', async (scenario: StandardScenario) => {
    const original = (await userCredential({
      id: scenario.userCredential.one.id,
    })) as UserCredential
    const result = await updateUserCredential({
      id: original.id,
      input: { id: 'String2' },
    })

    expect(result.id).toEqual('String2')
  })

  scenario('deletes a userCredential', async (scenario: StandardScenario) => {
    const original = (await deleteUserCredential({
      id: scenario.userCredential.one.id,
    })) as UserCredential
    const result = await userCredential({ id: original.id })

    expect(result).toEqual(null)
  })
})
