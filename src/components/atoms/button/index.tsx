import React from 'react'

type Props = {
  children?: any,
  className?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  text?: any,
  onClick?: void
}

const Button = ({
  children,
  className = '',
  size = 'md',
  text,
  onClick
}: Props) => (
  <button className={`button button--${size} ${className}`} onClick={onClick}>
    {text || children}
  </button>
)

export default Button
