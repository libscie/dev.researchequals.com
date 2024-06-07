import type { Meta, StoryObj } from '@storybook/react'

import AdministrationPage from './AdministrationPage'

const meta: Meta<typeof AdministrationPage> = {
  component: AdministrationPage,
}

export default meta

type Story = StoryObj<typeof AdministrationPage>

export const Primary: Story = {}
