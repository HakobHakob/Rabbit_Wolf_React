import React from 'react'
import { Square } from './Square'

function GameBoard({array}) {
 
  return (
    <div className="board" >
      {array.map((row,i) => (
        <div key={i}>
          {row.map((column,i) => (
            <Square key={i}>{column}</Square>
          ))}
        </div>
      ))}
    </div>
  )
}
export { GameBoard }
