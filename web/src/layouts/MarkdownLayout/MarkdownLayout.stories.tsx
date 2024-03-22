import type { Meta, StoryObj } from '@storybook/react'

import MarkdownLayout from './MarkdownLayout'

const meta: Meta<typeof MarkdownLayout> = {
  component: MarkdownLayout,
}

export default meta

type Story = StoryObj<typeof MarkdownLayout>

export const Primary: Story = {}
