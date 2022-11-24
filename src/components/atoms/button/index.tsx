import React from 'react'

type Props = {
  children?: any,
  className?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  text?: any
}

const Button = ({
  children,
  className = '',
  size = 'md',
  text
}: Props) => (
  <button className={`button button--${size} ${className}`}>
    {text || children}
  </button>
)

export default Button
