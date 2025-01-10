import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String7934097',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2025-01-10T11:22:27.823Z',
      },
    },
    two: {
      data: {
        email: 'String5280714',
        hashedPassword: 'String',
        salt: 'String',
        updatedAt: '2025-01-10T11:22:27.823Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
