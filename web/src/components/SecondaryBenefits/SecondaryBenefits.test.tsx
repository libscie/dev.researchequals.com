import { render } from '@redwoodjs/testing/web'

import SecondaryBenefits from './SecondaryBenefits'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SecondaryBenefits', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecondaryBenefits />)
    }).not.toThrow()
  })
})
