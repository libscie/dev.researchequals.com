import { classNames } from 'src/utils'

const Button = ({ styling, children }) => {
  return (
    <button
      className={classNames(
        styling,
        'flex h-8 w-auto cursor-pointer items-center rounded-[100px] border-0 bg-violet-600 px-2.5 py-1 text-center font-serif text-xl text-violet-50 hover:bg-violet-500'
      )}
    >
      {children}
    </button>
  )
}

export default Button
