import { render } from '@redwoodjs/testing/web'

import SecondaryNavUtils from './SecondaryNavUtils'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SecondaryNavUtils', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecondaryNavUtils />)
    }).not.toThrow()
  })
})
