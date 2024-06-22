import { forwardRef, Ref } from 'react'

import { Label, FieldError } from '@redwoodjs/forms'
import { InputFieldProps } from '@redwoodjs/forms/dist/InputComponents'

interface props {
  Field: React.ForwardRefExoticComponent<Omit<InputFieldProps, 'type'>>
  name: string
  label: string
  placeholder: string
  validation: object
  autoComplete?: string
  classNames?: string
  disabled?: boolean
}
const AuthField = forwardRef(function AuthField(
  props: props,
  ref?: Ref<HTMLInputElement>
) {
  const { Field, name, label, placeholder, validation, autoComplete } = props

  return (
    <span className={props.classNames}>
      <Label
        name={name}
        className="auth-label"
        errorClassName="auth-label-error"
      >
        {label} <FieldError name={name} className="" />
      </Label>
      <Field
        name={name}
        className="auth-input"
        errorClassName="auth-input-error"
        ref={ref}
        validation={validation}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={props.disabled}
      />
    </span>
  )
})

export default AuthField
