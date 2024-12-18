import { render } from '@redwoodjs/testing/web'

import Loader from './Loader'

describe('Loader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Loader stroke="#574cfa" />)
    }).not.toThrow()
  })
})
