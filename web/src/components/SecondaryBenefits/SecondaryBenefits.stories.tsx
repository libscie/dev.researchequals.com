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

import SecondaryBenefits from './SecondaryBenefits'

const meta: Meta<typeof SecondaryBenefits> = {
  component: SecondaryBenefits,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SecondaryBenefits>

export const Primary: Story = {}
