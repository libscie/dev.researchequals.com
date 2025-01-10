import type { Prisma, Membership } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.MembershipCreateArgs>({
  membership: {
    one: {
      data: {
        user: {
          create: {
            email: 'String7914602',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-01-10T11:22:18.623Z',
          },
        },
        workspace: { create: { handle: 'String4763765', name: 'String' } },
      },
    },
    two: {
      data: {
        user: {
          create: {
            email: 'String6588263',
            hashedPassword: 'String',
            salt: 'String',
            updatedAt: '2025-01-10T11:22:18.623Z',
          },
        },
        workspace: { create: { handle: 'String876155', name: 'String' } },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Membership, 'membership'>
