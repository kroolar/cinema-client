const Error = ({
  className,
  text
}) => {
  if(!text) return null
  
  return <div className="text-red-600 font-light text-sm leading-none">{text}</div>
}

export default Error
