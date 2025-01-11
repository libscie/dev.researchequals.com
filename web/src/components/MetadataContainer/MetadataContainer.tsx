const MetadataContainer = ({ children }) => {
  return (
    <div className="flex text-left lg:block lg:w-2/5 lg:p-2 lg:px-4">
      <span className="top-2 block w-full px-4 md:sticky">
        {children}
        {/* <hr /> */}
      </span>
    </div>
  )
}

export default MetadataContainer
