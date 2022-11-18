const Input = ({
  className,
  disabled = false,
  name,
  onChange,
  required = false,
  size = 'md',
  type = 'text',
  value
}) => (
  <input
    className={`input input--${size} ${className}`}
    disabled={disabled}
    name={name}
    onChange={onChange}
    required={required}
    type={type}
    value={value}
  />
)

export default Input
