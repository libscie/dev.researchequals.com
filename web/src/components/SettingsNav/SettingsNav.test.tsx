import { render } from '@redwoodjs/testing/web'

import SettingsNav from './SettingsNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SettingsNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SettingsNav />)
    }).not.toThrow()
  })
})
