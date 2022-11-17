const Card = ({
  children,
  className,
  size = 'md'
}) => (
  <div className={`card card--${size} ${className}`}>
    {children}
  </div>
)

export default Card
