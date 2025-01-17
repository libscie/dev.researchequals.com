import { render } from '@redwoodjs/testing/web'

import Setup2Fa from './Setup2Fa'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Setup2Fa', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Setup2Fa />)
    }).not.toThrow()
  })
})
