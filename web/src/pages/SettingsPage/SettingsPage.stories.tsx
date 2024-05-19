import type { Meta, StoryObj } from '@storybook/react'

import SettingsPage from './SettingsPage'

const meta: Meta<typeof SettingsPage> = {
  component: SettingsPage,
}

export default meta

type Story = StoryObj<typeof SettingsPage>

export const Primary: Story = {}
