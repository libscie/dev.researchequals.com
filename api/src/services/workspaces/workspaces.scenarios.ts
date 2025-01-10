import type { Prisma, Workspace } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WorkspaceCreateArgs>({
  workspace: {
    one: { data: { handle: 'String1723833', name: 'String' } },
    two: { data: { handle: 'String674387', name: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Workspace, 'workspace'>
