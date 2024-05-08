import Badge from '../Badge/Badge'

const AuthorMetadata = () => {
  return (
    <>
      <p className="flex w-full">
        <img
          src="https://www.chjh.nl/content/images/2022/04/220329_ChrisHartgerink_384_v1.jpg"
          className="mx-auto h-64 w-64 rounded-full object-cover"
          alt="Avatar of Chris Hartgerink"
        />
      </p>
      <h1 className="mt-0 text-center text-4xl">Chris Hartgerink</h1>
      <span className="flex w-full">
        <span className="mx-auto text-center">
          <Badge>they/them</Badge>
          <Badge>@chartgerink</Badge>
          <a href="https://orcid.org" target="_blank" rel="noreferrer">
            <Badge>0000-0003-1050-6809</Badge>
          </a>
          <Badge>Liberate Science</Badge>
          <Badge>https://chjh.nl</Badge>
        </span>
      </span>
    </>
  )
}

export default AuthorMetadata
