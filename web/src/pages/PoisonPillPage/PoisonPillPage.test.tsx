import { render } from '@redwoodjs/testing/web'

import PoisonPillPage from './PoisonPillPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('PoisonPillPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PoisonPillPage />)
    }).not.toThrow()
  })
})
