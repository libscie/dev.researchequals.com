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

import SignupSwitch from './SignupSwitch'

const meta: Meta<typeof SignupSwitch> = {
  component: SignupSwitch,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SignupSwitch>

export const Primary: Story = {}
