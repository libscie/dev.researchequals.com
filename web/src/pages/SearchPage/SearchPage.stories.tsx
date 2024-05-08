import type { Meta, StoryObj } from '@storybook/react'

import SearchPage from './SearchPage'

const meta: Meta<typeof SearchPage> = {
  component: SearchPage,
}

export default meta

type Story = StoryObj<typeof SearchPage>

export const Primary: Story = {}
