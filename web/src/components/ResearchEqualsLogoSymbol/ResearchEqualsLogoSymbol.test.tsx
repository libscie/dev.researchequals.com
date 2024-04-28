import { render } from '@redwoodjs/testing/web'

import ResearchEqualsLogoSymbol from './ResearchEqualsLogoSymbol'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ResearchEqualsLogoSymbol', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ResearchEqualsLogoSymbol />)
    }).not.toThrow()
  })
})
