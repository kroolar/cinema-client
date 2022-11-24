import React from 'react'

type Props = {
  className?: string,
  onClick?: () => void,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  type: string
}

const Icon = ({
  className,
  onClick,
  size = 'md',
  type = 'question_mark'
}: Props) => (
  <i
    className={`material-icons material-icons-outlined icon icon--${size} ${className}`}
    onClick={onClick}
  >
    {type}
  </i>
)

export default Icon
