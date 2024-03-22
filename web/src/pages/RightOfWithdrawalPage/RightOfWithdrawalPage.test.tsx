import { render } from '@redwoodjs/testing/web'

import RightOfWithdrawalPage from './RightOfWithdrawalPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('RightOfWithdrawalPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RightOfWithdrawalPage />)
    }).not.toThrow()
  })
})
