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

import MetadataContainer from './MetadataContainer'

const meta: Meta<typeof MetadataContainer> = {
  component: MetadataContainer,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof MetadataContainer>

export const Primary: Story = {}
