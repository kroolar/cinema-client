import React from 'react'

type Props = {
  className?: string,
  disabled: boolean,
  name?: string,
  onChange: () => void,
  required: boolean,
  size: 'xs' | 'sm' | 'md' |'lg' | 'xl',
  type: string,
  value: string
}

const Input = ({
  className,
  disabled = false,
  name,
  onChange,
  required = false,
  size = 'md',
  type = 'text',
  value
}: Props) => (
  <input
    className={`input input--${size} ${className}`}
    disabled={disabled}
    name={name}
    onChange={onChange}
    required={required}
    type={type}
    value={value}
  />
)

export default Input
