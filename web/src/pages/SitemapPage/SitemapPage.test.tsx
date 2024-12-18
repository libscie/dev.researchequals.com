import { render } from '@redwoodjs/testing/web'

import SitemapPage from './SitemapPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SitemapPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SitemapPage />)
    }).not.toThrow()
  })
})
