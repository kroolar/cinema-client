const Icon = ({
  className,
  type = 'question_mark',
  onClick,
  size = "md"
}) => (
  <i onClick={onClick} className={`material-icons material-icons-outlined icon icon--${size} ${className}`}>
    {type}
  </i>
)

export default Icon
