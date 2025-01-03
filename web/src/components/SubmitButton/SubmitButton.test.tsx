import { render } from '@redwoodjs/testing/web'

import SubmitButton from './SubmitButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SubmitButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SubmitButton />)
    }).not.toThrow()
  })
})
