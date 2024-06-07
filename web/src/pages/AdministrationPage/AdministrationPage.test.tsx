import { render } from '@redwoodjs/testing/web'

import AdministrationPage from './AdministrationPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AdministrationPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AdministrationPage />)
    }).not.toThrow()
  })
})
