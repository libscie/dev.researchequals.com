import { render } from '@redwoodjs/testing/web'

import OpenAlexAuthorPage from './OpenAlexAuthorPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('OpenAlexAuthorPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OpenAlexAuthorPage />)
    }).not.toThrow()
  })
})
