import { render } from '@redwoodjs/testing/web'

import NavigationBar from './NavigationBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NavigationBar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavigationBar />)
    }).not.toThrow()
  })
})
