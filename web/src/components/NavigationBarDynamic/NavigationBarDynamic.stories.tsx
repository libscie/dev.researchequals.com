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

import NavigationBarDynamic from './NavigationBarDynamic'

const meta: Meta<typeof NavigationBarDynamic> = {
  component: NavigationBarDynamic,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof NavigationBarDynamic>

export const Primary: Story = {}
