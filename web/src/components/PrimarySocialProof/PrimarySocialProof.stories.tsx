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

import PrimarySocialProof from './PrimarySocialProof'

const meta: Meta<typeof PrimarySocialProof> = {
  component: PrimarySocialProof,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PrimarySocialProof>

export const Primary: Story = {}
