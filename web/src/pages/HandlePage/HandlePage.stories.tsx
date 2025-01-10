import type { Meta, StoryObj } from '@storybook/react'

import HandlePage from './HandlePage'

const meta: Meta<typeof HandlePage> = {
  component: HandlePage,
}

export default meta

type Story = StoryObj<typeof HandlePage>

export const Primary: Story = {}
