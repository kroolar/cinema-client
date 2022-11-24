import React from 'react'

type Props = {
  className?: string,
  htmlFor?: string,
  text: string,
  required?: boolean
  size: 'xs' | 'sm' | 'md' |'lg' | 'xl'
}

const Label = ({
  className,
  htmlFor,
  text,
  required,
  size
}:Props) => (
  <label
    className={`label label--${size} ${className}`}
    htmlFor={htmlFor}
  >
    {text}
    {required && '*'}
  </label>
)

export default Label
