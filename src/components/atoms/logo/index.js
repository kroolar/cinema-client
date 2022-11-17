const Logo = ({
  className,
  size = 'md'
}) => (
  <img
    alt="logo"
    className={`logo logo--${size} ${className}`}
    src="/logo.png"
  />
)

export default Logo
