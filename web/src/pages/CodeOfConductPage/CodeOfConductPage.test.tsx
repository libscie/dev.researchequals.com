import { render } from '@redwoodjs/testing/web'

import CodeOfConductPage from './CodeOfConductPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CodeOfConductPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CodeOfConductPage />)
    }).not.toThrow()
  })
})
