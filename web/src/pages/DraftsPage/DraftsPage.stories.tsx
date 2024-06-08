import type { Meta, StoryObj } from '@storybook/react'

import DraftsPage from './DraftsPage'

const meta: Meta<typeof DraftsPage> = {
  component: DraftsPage,
}

export default meta

type Story = StoryObj<typeof DraftsPage>

export const Primary: Story = {}
