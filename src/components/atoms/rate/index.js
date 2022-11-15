import { Icon } from '../../index'

const Rate = ({
  scale = 5,
  value,
  className,
  onClick
}) => {
  const stars = []

  for (let i = 0; i < scale; i++) {
    let starType = 'star_outline'

    if(value > i) starType = 'star' 

    stars.push(<Icon key={i} onClick={() => onClick(i + 1)} className="rate__star" type={starType} />)
  }

  return (
    <div className={`rate ${onClick && 'rate--editable'} ${className}`}>
      {stars}
    </div>
  )
}

export default Rate
