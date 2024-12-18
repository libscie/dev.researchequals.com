import type { Meta, StoryObj } from '@storybook/react'

import Loader from './Loader'

const meta: Meta<typeof Loader> = {
  component: Loader,
  tags: ['autodocs'],
  argTypes: {
    stroke: {
      control: 'color', // Use the color control to allow color input
      description: 'The stroke color of the loader',
      defaultValue: 'black',
    },
  },
}

export default meta

type Story = StoryObj<typeof Loader>

export const Primary: Story = {
  args: {
    stroke: 'black',
  },
}
