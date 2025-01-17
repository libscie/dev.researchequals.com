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

import Verify2Fa from './Verify2Fa'

const meta: Meta<typeof Verify2Fa> = {
  component: Verify2Fa,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Verify2Fa>

export const Primary: Story = {}
