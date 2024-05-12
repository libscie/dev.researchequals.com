import { render } from '@redwoodjs/testing/web'

import PrimaryBenefits from './PrimaryBenefits'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PrimaryBenefits', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrimaryBenefits />)
    }).not.toThrow()
  })
})
