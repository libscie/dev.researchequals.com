// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import WorkspaceCell from 'src/components/WorkspaceCell'

const HandlePage = ({ handle }) => {
  const { currentUser } = useAuth()

  return (
    <>
      <Metadata title={handle} description="Handle page" />
      <h1>{handle}</h1>
      {currentUser ? 'yes' : 'no'}
      {/* <p>{JSON.stringify(currentUser.memberships[0])}</p> */}
      <WorkspaceCell handle={handle} />
    </>
  )
}

export default HandlePage

// IDEAS
// - Add a "Follow" button to the HandlePage
// - [ ] Add most interesting people Handle follows at bottom of page
// - [ ] Add most interesting people who follow Handle at bottom of page
// - [ ] Add most interesting works Handle has written at bottom of page
// - [ ] Add most interesting works Handle has collected at bottom of page
