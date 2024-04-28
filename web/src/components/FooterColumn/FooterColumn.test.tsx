import { render } from '@redwoodjs/testing/web'

import FooterColumn from './FooterColumn'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FooterColumn', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FooterColumn />)
    }).not.toThrow()
  })
})
