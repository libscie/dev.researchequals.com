import { render } from '@redwoodjs/testing/web'

import CuratePage from './CuratePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CuratePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CuratePage />)
    }).not.toThrow()
  })
})
