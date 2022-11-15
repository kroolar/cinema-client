const Input = ({
  className,
  value,
  onChange
}) => (
  <input
    className={`input ${className}`}
    value={value}
    onChange={onChange}
  />
)

export default Input
