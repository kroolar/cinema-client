const Button = ({
  className,
  text
}) => (
  <button className={`button ${className}`}>
    {text}
  </button>
)

export default Button
