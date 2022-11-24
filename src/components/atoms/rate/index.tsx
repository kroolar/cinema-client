import React from 'react'
import { Icon } from '../../index'

type Props = {
  className: string,
  onChange?: () => void,
  scale?: number,
  size: 'xs' | 'sm' | 'md' |'lg' | 'xl',
  value: number
}

const Rate = ({
  className,
  onChange,
  scale = 5,
  size = 'md',
  value
}:Props) => {
  const stars = []

  for (let i = 0; i < scale; i++) {
    let starType = 'star_outline'

    if(value > i) starType = 'star' 

    stars.push(
      <Icon
        className="rate__star"
        key={i}
        onClick={() => onChange(i + 1)}
        size={size}
        type={starType}
      />)
  }

  return (
    <div className={`rate rate--${size} ${onChange && 'rate--editable'} ${className}`}>
      {stars}
    </div>
  )
}

export default Rate
