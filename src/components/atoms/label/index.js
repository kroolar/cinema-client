const Label = ({
  className,
  htmlFor,
  text,
  required
}) => (
  <label className={`font-medium leading-none ${className}`} htmlFor={htmlFor}>
    {text}
    {required && '*'}
  </label>
)

export default Label
