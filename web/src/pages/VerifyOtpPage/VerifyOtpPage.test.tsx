import { render } from '@redwoodjs/testing/web'

import VerifyOtpPage from './VerifyOtpPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('VerifyOtpPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<VerifyOtpPage />)
    }).not.toThrow()
  })
})
