// import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

import WorkspaceCell from 'src/components/WorkspaceCell'
// 1. Error when handle does not exist

const HandlePage = ({ handle }) => {
  return (
    <>
      <Metadata title={handle} description="Handle page" />
      <h1>{handle}</h1>
      <p>
        Find me in <code>./web/src/pages/HandlePage/HandlePage.tsx</code>
      </p>
      <WorkspaceCell handle={handle} />
      {/*
          My default route is named `handle`, link to me with:
          `<Link to={routes.handle()}>Handle</Link>`
      */}
    </>
  )
}

export default HandlePage
