import { render } from '@redwoodjs/testing/web'

import AuthContainer from './AuthContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthContainer />)
    }).not.toThrow()
  })
})
