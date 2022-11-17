const Button = ({
  children,
  className,
  size = 'md',
  text
}) => (
  <button className={`button button--${size} ${className}`}>
    {text || children}
  </button>
)

export default Button
