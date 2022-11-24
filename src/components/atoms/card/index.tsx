import React from 'react'

type Props = {
  children: any,
  className: string,
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Card = ({
  children,
  className,
  size = 'md'
}: Props) => (
  <div className={`card card--${size} ${className}`}>
    {children}
  </div>
)

export default Card
