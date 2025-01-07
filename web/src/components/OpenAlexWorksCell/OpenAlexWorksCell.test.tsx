import { render } from '@redwoodjs/testing/web'

import OpenAlexWorksCell from './OpenAlexWorksCell'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//        https://redwoodjs.com/docs/testing#testing-cells
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('OpenAlexWorksCell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(
        <OpenAlexWorksCell url="https://api.openalex.org/works?filter=author.id:A5063079579" />
      )
    }).not.toThrow()
  })
})
