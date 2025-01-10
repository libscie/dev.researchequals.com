import type { Prisma, UserCredential } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCredentialCreateArgs>({
  userCredential: {
    one: {
      data: {
        id: 'String',
        publicKey: Buffer.from([224, 114, 71]),
        counter: 7790183,
        user: {
          create: {
            email: 'String6516262',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-01-10T11:22:43.344Z',
          },
        },
      },
    },
    two: {
      data: {
        id: 'String',
        publicKey: Buffer.from([94, 215, 247]),
        counter: 3065466,
        user: {
          create: {
            email: 'String4995543',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-01-10T11:22:43.344Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<UserCredential, 'userCredential'>
