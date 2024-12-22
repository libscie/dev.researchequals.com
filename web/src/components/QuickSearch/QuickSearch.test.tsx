import { render } from '@redwoodjs/testing/web'

import QuickSearch from './QuickSearch'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('QuickSearch', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuickSearch />)
    }).not.toThrow()
  })
})
