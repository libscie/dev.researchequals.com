import { render } from '@redwoodjs/testing/web'

import Verify2FaPage from './Verify2FaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Verify2FaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Verify2FaPage />)
    }).not.toThrow()
  })
})
