import React from 'react'
import { Square } from './GameBoard'

function GameGrid(props) {
  return (
    <div>
      {props.array.map((row) => row.map((column) => <Square>{column}</Square>))}
    </div>
  )
}
export { GameGrid }
