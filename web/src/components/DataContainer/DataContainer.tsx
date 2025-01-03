const DataContainer = ({ children }) => {
  return (
    <div className="w-full p-0">
      <div className="h-[100vh] lg:p-2 print:max-w-full">{children}</div>
    </div>
  )
}

export default DataContainer
