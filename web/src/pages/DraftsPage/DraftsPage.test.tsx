import { render } from '@redwoodjs/testing/web'

import DraftsPage from './DraftsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DraftsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DraftsPage />)
    }).not.toThrow()
  })
})
