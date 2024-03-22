import { render } from '@redwoodjs/testing/web'

import MarketingLayout from './MarketingLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MarketingLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MarketingLayout />)
    }).not.toThrow()
  })
})
