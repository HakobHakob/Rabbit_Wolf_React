import React from 'react'
import { Square } from './GameBoard'



function GameGrid(props) {
  return (
    <div className="board" >
      {props.array.map((row,i) => (
        <div key={i}>
          {row.map((column) => (
            <Square>{column}</Square>
          ))}
        </div>
      ))}
    </div>
  )
}
export { GameGrid }
