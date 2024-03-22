import { render } from '@redwoodjs/testing/web'

import MarkdownLayout from './MarkdownLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MarkdownLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MarkdownLayout />)
    }).not.toThrow()
  })
})
