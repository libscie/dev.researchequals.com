import { render } from '@redwoodjs/testing/web'

import Verify2Fa from './Verify2Fa'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Verify2Fa', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Verify2Fa />)
    }).not.toThrow()
  })
})
