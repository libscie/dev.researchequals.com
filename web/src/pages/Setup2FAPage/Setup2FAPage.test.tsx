import { render } from '@redwoodjs/testing/web'

import Setup2FaPage from './Setup2FaPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('Setup2FaPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Setup2FaPage />)
    }).not.toThrow()
  })
})
