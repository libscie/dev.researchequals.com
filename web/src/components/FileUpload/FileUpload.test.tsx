import { render } from '@redwoodjs/testing/web'

import FileUpload from './FileUpload'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FileUpload', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FileUpload />)
    }).not.toThrow()
  })
})
