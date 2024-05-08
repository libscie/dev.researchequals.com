const Badge = ({ children }) => {
  return (
    <span className="m-1 inline-flex items-center rounded-md bg-violet-50 px-2 py-1 text-sm font-normal text-violet-950 ring-1 ring-inset ring-violet-950/10">
      {children}
    </span>
  )
}

export default Badge
