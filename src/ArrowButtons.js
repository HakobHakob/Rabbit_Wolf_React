import React from 'react'
import './App.css'

const ArrowButtons = ({ onClick, className }) => {
  return (
    <div className="arrowsDiv">
      <div onClick={onClick} className={className}></div>
    </div>
  )
}

export { ArrowButtons }
