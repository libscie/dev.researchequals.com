import { render } from '@redwoodjs/testing/web'

import DataContainer from './DataContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DataContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DataContainer />)
    }).not.toThrow()
  })
})
