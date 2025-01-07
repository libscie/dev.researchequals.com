import type { Meta, StoryObj } from '@storybook/react'

import OpenAlexWorksCell from './OpenAlexWorksCell'

const meta: Meta = {
  title: 'Cells/OpenAlexWorksCell',
  component: OpenAlexWorksCell,
  tags: ['autodocs'],
}

export default meta

export const Default: StoryObj<typeof OpenAlexWorksCell> = {
  args: {
    url: 'https://api.openalex.org/works?filter=author.id:A5063079579',
  },
  render: (args) => <OpenAlexWorksCell {...args} />,
}
