import { render } from '@redwoodjs/testing/web'

import NavigationBarDynamic from './NavigationBarDynamic'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavigationBarDynamic', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationBarDynamic />)
    }).not.toThrow()
  })
})
