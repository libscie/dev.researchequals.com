import type { Meta, StoryObj } from '@storybook/react'

import ModerationPage from './ModerationPage'

const meta: Meta<typeof ModerationPage> = {
  component: ModerationPage,
}

export default meta

type Story = StoryObj<typeof ModerationPage>

export const Primary: Story = {}
