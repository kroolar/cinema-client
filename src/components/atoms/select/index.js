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
    <div className="relative bg-gray-100 border rounded h-10 px-3">
      <div
        onClick={() => setExpanded(!expanded)}
        className="cursor-pointer flex items-center justify-between"
      >
        <div className="mr-3">{value || placeholder}</div>

        <Icon
          className={`w-4 text-gray-800 duration-300 ${expanded && 'rotate-180'}`}
          type="expand_more"
        />
      </div>

      {expanded && (
        <div className="cursor-pointer absolute mt-10 bg-gray-100 w-full left-0 top-0">
          {options.map(option => (
            <div
              onClick={() => {onChange(option.value); setExpanded(false) }}
              className="cursor-pointer hover:bg-gray-200 border rounded flex items-center px-3 h-8"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Select
