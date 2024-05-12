import { render } from '@redwoodjs/testing/web'

import SecondaryCallToAction from './SecondaryCallToAction'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SecondaryCallToAction', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecondaryCallToAction />)
    }).not.toThrow()
  })
})
