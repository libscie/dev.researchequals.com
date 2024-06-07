import { render } from '@redwoodjs/testing/web'

import SettingsSecurityPage from './SettingsSecurityPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SettingsSecurityPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SettingsSecurityPage />)
    }).not.toThrow()
  })
})
