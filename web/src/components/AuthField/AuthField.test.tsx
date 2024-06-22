import { render } from '@redwoodjs/testing/web'

import AuthField from './AuthField'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AuthField', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthField />)
    }).not.toThrow()
  })
})
