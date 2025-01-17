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

import VerifyOtp from './VerifyOtp'

const meta: Meta<typeof VerifyOtp> = {
  component: VerifyOtp,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof VerifyOtp>

export const Primary: Story = {}
