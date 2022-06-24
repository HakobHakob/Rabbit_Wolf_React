import React from 'react'
import { GameBoard } from './GameBoard'

function GameGrid(props) {

  const FREE_CELL = 0
  const gameBoard = new Array(props)

  return (
    <div>
      
     
      {gameBoard.fill(FREE_CELL).map(() => {
        return (
          <div key ={Math.random()}>
            {gameBoard.map(() => (
              <GameBoard />
            ))}
          </div>
        )
      })}
    </div>
  )
}
export { GameGrid }
