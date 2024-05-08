import { render } from '@redwoodjs/testing/web'

import AuthorMetadata from './AuthorMetadata'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthorMetadata', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthorMetadata />)
    }).not.toThrow()
  })
})
