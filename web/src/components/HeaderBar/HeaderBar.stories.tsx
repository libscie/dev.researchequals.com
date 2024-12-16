// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import HeaderBar from './HeaderBar'

const meta: Meta<typeof HeaderBar> = {
  component: HeaderBar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HeaderBar>

export const Empty: Story = {}

export const GenericChild: Story = {
  args: {
    children: 'Hello, World!',
  },
}
