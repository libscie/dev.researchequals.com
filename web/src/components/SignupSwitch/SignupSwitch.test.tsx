import { render } from '@redwoodjs/testing/web'

import SignupSwitch from './SignupSwitch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SignupSwitch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SignupSwitch />)
    }).not.toThrow()
  })
})
