import React from 'react'

type Props = {
  className?: string,
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  text: string
}

const Error = ({
  className,
  size = 'md',
  text
}:Props) => {
  if(!text) return null
  
  return (
    <div className={`error error--${size} ${className}`}>
      {text}
    </div>
  )
}

export default Error
