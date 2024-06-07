import { render } from '@redwoodjs/testing/web'

import SettingsWorkspacePage from './SettingsWorkspacePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SettingsWorkspacePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SettingsWorkspacePage />)
    }).not.toThrow()
  })
})
