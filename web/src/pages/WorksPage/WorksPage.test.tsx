import { render } from '@redwoodjs/testing/web'

import WorksPage from './WorksPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('WorksPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WorksPage />)
    }).not.toThrow()
  })
})
