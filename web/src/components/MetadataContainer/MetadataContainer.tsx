const MetadataContainer = ({ children }) => {
  return (
    <div className="flex text-left lg:block lg:w-2/5 lg:p-2 lg:px-4">
      <span className="sticky top-2 mx-auto block">
        {children}
        <hr />
      </span>
    </div>
  )
}

export default MetadataContainer
