const Icon = ({
  className,
  type = 'question_mark',
  onClick
}) => (
  <i onClick={onClick} className={`material-icons icon ${className}`}>
    {type}
  </i>
)

export default Icon
