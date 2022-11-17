const Error = ({
  className,
  size = 'md',
  text
}) => {
  if(!text) return null
  
  return (
    <div className={`error error--${size} ${className}`}>
      {text}
    </div>
  )
}

export default Error
