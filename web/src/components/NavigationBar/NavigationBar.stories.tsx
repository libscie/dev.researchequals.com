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

import NavigationBar from './NavigationBar'

const meta: Meta<typeof NavigationBar> = {
  component: NavigationBar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof NavigationBar>

export const Primary: Story = {}
