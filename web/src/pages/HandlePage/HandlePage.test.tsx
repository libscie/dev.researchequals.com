import { render } from '@redwoodjs/testing/web'

import HandlePage from './HandlePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HandlePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HandlePage />)
    }).not.toThrow()
  })
})
