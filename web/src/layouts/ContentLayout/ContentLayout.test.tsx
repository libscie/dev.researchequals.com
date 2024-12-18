import { render } from '@redwoodjs/testing/web'

import ContentLayout from './ContentLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ContentLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ContentLayout />)
    }).not.toThrow()
  })
})
