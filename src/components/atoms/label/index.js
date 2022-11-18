const Label = ({
  className,
  htmlFor,
  text,
  required,
  size
}) => (
  <label
    className={`label label--${size} ${className}`}
    htmlFor={htmlFor}
  >
    {text}
    {required && '*'}
  </label>
)

export default Label
