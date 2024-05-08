import type { Meta, StoryObj } from '@storybook/react'

import AuthorPage from './AuthorPage'

const meta: Meta<typeof AuthorPage> = {
  component: AuthorPage,
}

export default meta

type Story = StoryObj<typeof AuthorPage>

export const Primary: Story = {}
