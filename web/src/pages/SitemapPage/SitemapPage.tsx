import { routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const camelCaseToRegularString = (str) => {
  return str
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (char) => char.toUpperCase())
}

const SitemapPage = () => {
  const routeNames = Object.keys(routes)

  return (
    <>
      <Metadata title="Sitemap" description="Sitemap page" />

      <h1>Sitemap</h1>
      <ul>
        {routeNames.map((routeName) => (
          <li key={routeName}>
            {camelCaseToRegularString(routeName)}: {routes[routeName]()}
          </li>
        ))}
      </ul>
      {/*
          My default route is named `sitemap`, link to me with:
          `<Link to={routes.sitemap()}>Sitemap</Link>`
      */}
    </>
  )
}

export default SitemapPage
