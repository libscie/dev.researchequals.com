import { render } from '@redwoodjs/testing/web'

import ImprintPage from './ImprintPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ImprintPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ImprintPage />)
    }).not.toThrow()
  })
})
