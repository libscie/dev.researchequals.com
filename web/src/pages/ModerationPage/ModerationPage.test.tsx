import { render } from '@redwoodjs/testing/web'

import ModerationPage from './ModerationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ModerationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ModerationPage />)
    }).not.toThrow()
  })
})
