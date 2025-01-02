import { render } from '@redwoodjs/testing/web'

import OpenAlexWorkPage from './OpenAlexWorkPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OpenAlexWorkPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OpenAlexWorkPage />)
    }).not.toThrow()
  })
})
