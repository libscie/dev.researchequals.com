import { render } from '@redwoodjs/testing/web'

import VerifyOtp from './VerifyOtp'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('VerifyOtp', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VerifyOtp />)
    }).not.toThrow()
  })
})
