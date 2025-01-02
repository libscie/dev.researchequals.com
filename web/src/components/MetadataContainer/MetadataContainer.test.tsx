import { render } from '@redwoodjs/testing/web'

import MetadataContainer from './MetadataContainer'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MetadataContainer', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MetadataContainer />)
    }).not.toThrow()
  })
})
