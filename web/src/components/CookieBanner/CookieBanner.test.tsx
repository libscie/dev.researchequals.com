import { render } from '@redwoodjs/testing/web'

import CookieBanner from './CookieBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CookieBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CookieBanner />)
    }).not.toThrow()
  })
})
