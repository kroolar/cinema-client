import React, { useState } from "react"
import { Icon } from '../../'

type Props = {
  className?: string,
  text: string,
  type: 'error' | 'info' | 'success' | 'warning'
}

const Toast = ({
  className,
  text,
  type = 'info'
}: Props) => {
  const [hidden, setHidden] = useState(false)

  const icon = {
    error: 'error',
    info: 'info',
    success: 'check_circle',
    warning: 'warning'
  }

  return (
    <div className={`toast toast--${type} ${hidden && 'toast--hidden'} ${className}`}>
      <Icon
        className="toast__icon"
        size="sm"
        type={icon[type]}
        />
  
      <div className="toast__content">
        <div className="toast__text">{text}</div>
      </div>
  
      <Icon
        onClick={() => setHidden(true)}
        className="toast__close"
        type="close"
      />
    </div>
  )
}

export default Toast
