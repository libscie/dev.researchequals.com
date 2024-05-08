import { render } from '@redwoodjs/testing/web'

import AuthorPage from './AuthorPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AuthorPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthorPage />)
    }).not.toThrow()
  })
})
