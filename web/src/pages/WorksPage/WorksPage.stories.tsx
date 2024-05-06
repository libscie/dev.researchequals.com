import type { Meta, StoryObj } from '@storybook/react'

import WorksPage from './WorksPage'

const meta: Meta<typeof WorksPage> = {
  component: WorksPage,
}

export default meta

type Story = StoryObj<typeof WorksPage>

export const Primary: Story = {}
