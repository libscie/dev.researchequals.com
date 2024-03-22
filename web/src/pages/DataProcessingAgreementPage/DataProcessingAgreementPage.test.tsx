import { render } from '@redwoodjs/testing/web'

import DataProcessingAgreementPage from './DataProcessingAgreementPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DataProcessingAgreementPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DataProcessingAgreementPage />)
    }).not.toThrow()
  })
})
