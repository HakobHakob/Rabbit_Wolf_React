import React from 'react'

// const directionClassname = ['UP', 'DOWN', 'RIGHT', 'LEFT']
// directionClassname.map((item) => {

//   console.log(item)
//   })

const ArrowButtons = ({ onClick, index, direction }) => {
  if (direction === 0) {
    return (
      <div className="arrowsDiv" key={index}>
        <button onClick={onClick}>&#8679;</button>
      </div>
    )
  }
  if (direction === 3) {
    return (
      <div className="arrowsDiv" key={index}>
        <button onClick={onClick}>&#8678;</button>
      </div>
    )
  }
  if (direction === 1) {
    return (
      <div className="arrowsDiv" key={index}>
        <button onClick={onClick}>&#8681;</button>
      </div>
    )
  }
  if (direction === 2) {
    return (
      <div className="arrowsDiv" key={index}>
        <button onClick={onClick}>&#8680;</button>
      </div>
    )
  }
  
}

export { ArrowButtons }
