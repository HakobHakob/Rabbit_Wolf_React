import React from 'react'

const CustomSelect = ({ options, onChange }) => {
  return (
    <select className="select" onChange={onChange}>
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}

export { CustomSelect }
