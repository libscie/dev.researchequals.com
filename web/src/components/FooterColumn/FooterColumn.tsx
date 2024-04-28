import { classNames } from 'src/utils'

const FooterColumn = ({ children, flexGrow }) => {
  return (
    <div className={classNames('flex flex-col mx-2 mr-4 my-2 md:my-0 pt-2', flexGrow ? 'flex-grow' : '')}>
    {children}
  </div>
  )
}

export default FooterColumn
