import { render } from '@redwoodjs/testing/web'

import SecondarySocialProof from './SecondarySocialProof'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SecondarySocialProof', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecondarySocialProof />)
    }).not.toThrow()
  })
})
