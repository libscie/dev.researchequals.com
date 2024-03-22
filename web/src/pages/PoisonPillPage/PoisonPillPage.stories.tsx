import type { Meta, StoryObj } from '@storybook/react'

import PoisonPillPage from './PoisonPillPage'

const meta: Meta<typeof PoisonPillPage> = {
  component: PoisonPillPage,
}

export default meta

type Story = StoryObj<typeof PoisonPillPage>

export const Primary: Story = {}
