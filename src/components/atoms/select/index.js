import { useState } from "react"
import Icon from "../icon"

const Select = ({
  className,
  onChange,
  value,
  placeholder = 'Select option',
  options = []
}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`select ${expanded && 'select--expanded'} ${className}`}>
      <div
        onClick={() => setExpanded(!expanded)}
        className="select__input"
      >
        <div className="select__text">
          {value || placeholder}
        </div>

        <Icon
          className="select__arrow"
          size="sm"
          type="expand_more"
        />
      </div>

      {expanded && (
        <div className="select__options">
          {options.map(({ label, value }) => (
            <div
              onClick={() => {onChange(value); setExpanded(false) }}
              className="select__option"
            >
              {label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Select
