import { classNames } from 'src/utils'

const FooterColumn = ({ children, flexGrow }) => {
  return (
    <div
      className={classNames(
        'mx-2 my-2 mr-4 flex flex-col pt-2 md:my-0',
        flexGrow ? 'flex-grow' : ''
      )}
    >
      {children}
    </div>
  )
}

export default FooterColumn
