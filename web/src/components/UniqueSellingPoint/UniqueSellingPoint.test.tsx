import { render } from '@redwoodjs/testing/web'

import UniqueSellingPoint from './UniqueSellingPoint'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('UniqueSellingPoint', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UniqueSellingPoint />)
    }).not.toThrow()
  })
})
