import React from 'react'
import { useState } from 'react'
import { ArrowButtons } from './ArrowButtons'
import { CreateGameArray } from './CreateEmptyMass'
import { CustomSelect } from './CustomSelect'
import { GameBoard } from './RendGameBoard'
import { StartBtn } from './StartBtn'
import { ShowMessage } from './ShowMessage'
import { MoveCharacters } from './MoveCharacters'

const options = [
  { value: 5, label: '5 x 5' },
  { value: 7, label: '7 x 7' },
  { value: 10, label: '10 x 10' },
]

const directions = [0, 1, 2, 3]
const GAMEBOARD_DEFAULT_SIZE = 5

const GameArea = () => {
  const [boardSize, setBoardSize] = useState(GAMEBOARD_DEFAULT_SIZE)

  const [gameState, setgameState] = useState({
    gameGrid: [],
    isGameOver: false,
    gameResult: '',
  })
  const gameArray = gameState.gameGrid
  const isGameInProcess = gameState.isGameOver === false && gameArray.length > 0

  const changeSelectValue = (e) => {
    setBoardSize(parseInt(e.target.value))
  }

  const gameStartClick = () => {
    setgameState({
      gameGrid: CreateGameArray(boardSize),
      isGameOver: false,
      gameResult: '',
    })
  }

  const setRabbitDirections = (directions) => {
    if (gameState.isGameOver === true) {
      return
    }
    const charactersMovement = MoveCharacters(gameState, directions)
    setgameState(charactersMovement)
  }

  return (
    <div className="board">
      <div className="optionsDiv">
        <StartBtn onClick={gameStartClick} />

        {isGameInProcess ? (
          <div className="buttonsDiv">
            {directions.map((direction, index) => {
              return (
                <ArrowButtons
                  key={index}
                  className={'button' + direction}
                  onClick={() => {
                    setRabbitDirections(direction)
                  }}
                />
              )
            })}
          </div>
        ) : null}

        <CustomSelect options={options} onChange={changeSelectValue} />
      </div>

      {gameState.isGameOver === true ? (
        <ShowMessage message={gameState.gameResult} />
      ) : (
        <div className="gameBoardDiv">
          {<GameBoard array={gameState.gameGrid} />}
        </div>
      )}
    </div>
  )
}

export { GameArea }
