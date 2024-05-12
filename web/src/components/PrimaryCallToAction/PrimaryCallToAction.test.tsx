import { render } from '@redwoodjs/testing/web'

import PrimaryCallToAction from './PrimaryCallToAction'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PrimaryCallToAction', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PrimaryCallToAction />)
    }).not.toThrow()
  })
})
