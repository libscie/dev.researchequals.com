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

import SubmitButton from './SubmitButton'

const meta: Meta<typeof SubmitButton> = {
  component: SubmitButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SubmitButton>

export const Primary: Story = {}
