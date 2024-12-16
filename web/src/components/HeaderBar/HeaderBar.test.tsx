import { render, screen } from '@redwoodjs/testing/web'

import HeaderBar from './HeaderBar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeaderBar', () => {
  it('renders empty state', () => {
    expect(() => {
      render(<HeaderBar>{undefined}</HeaderBar>)
    }).not.toThrow()
  })

  const txt = 'Hello, World!'
  it('renders generic children', () => {
    expect(() => {
      render(<HeaderBar>{txt}</HeaderBar>)
    }).not.toThrow()
  })
  render(<HeaderBar>{txt}</HeaderBar>)
  expect(screen.getByText(txt)).toBeInTheDocument()

  // test the rendered output color contrast according to WCAG AAA
  // https://webaim.org/resources/contrastchecker/
  // min 7:1 for normal text and 4.5:1 for large text
  // also test for dark mode
})
