import { render } from '@redwoodjs/testing/web'

import BentoBox from './BentoBox'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BentoBox', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BentoBox />)
    }).not.toThrow()
  })
})
