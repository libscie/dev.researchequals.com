import { Submit } from '@redwoodjs/forms'

interface SubmitButtonProps {
  text: string
  disabled?: boolean
}

const SubmitButton = ({ text, disabled = false }: SubmitButtonProps) => {
  return (
    <Submit
      className="mx-auto flex h-8 w-auto cursor-pointer items-center rounded-full border-0 bg-violet-950 p-2 px-4 text-center font-serif text-xl text-white hover:bg-violet-700 disabled:bg-red-950/5"
      disabled={disabled}
    >
      {text}
    </Submit>
  )
}

export default SubmitButton
