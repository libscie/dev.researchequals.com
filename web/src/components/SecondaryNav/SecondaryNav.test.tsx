import { render } from '@redwoodjs/testing/web'

import { settingsNav } from '../SecondaryNavUtils/SecondaryNavUtils'

import SecondaryNav from './SecondaryNav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SecondaryNav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <SecondaryNav
          items={settingsNav}
          header="Settings"
          current="Workspace"
        />
      )
    }).not.toThrow()
  })
})
