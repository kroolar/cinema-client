import React from 'react'

type Props = {
  className?: string,
  size?: 'xs' | 'sm' | 'md' |'lg' | 'xl'
}
const Logo = ({
  className,
  size = 'md'
}:Props) => (
  <img
    alt="logo"
    className={`logo logo--${size} ${className}`}
    src="/logo.png"
  />
)

export default Logo
