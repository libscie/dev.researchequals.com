import { render } from '@redwoodjs/testing/web'

import PrimarySocialProof from './PrimarySocialProof'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PrimarySocialProof', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrimarySocialProof />)
    }).not.toThrow()
  })
})
