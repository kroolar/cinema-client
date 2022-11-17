const Icon = ({
  className,
  onClick,
  size = 'md',
  type = 'question_mark'
}) => (
  <i
    className={`material-icons material-icons-outlined icon icon--${size} ${className}`}
    onClick={onClick}
  >
    {type}
  </i>
)

export default Icon
