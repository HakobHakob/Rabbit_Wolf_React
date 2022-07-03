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

const directions = {
  UP: 0,
  DOWN: 1,
  RIGHT: 2,
  LEFT: 3,
}
const GAMEBOARD_DEFAULT_SIZE = 5

const GameArea = () => {
  const [boardSize, setBoardSize] = useState(GAMEBOARD_DEFAULT_SIZE)

  const [gameStat, setGameStat] = useState({
    gameGrid: [],
    isGameOver: false,
    gameResult: '',
  })

  const changeSelectValue = (e) => {
    setBoardSize(+e.target.value)
  }

  const [isActiveButtons, setIsActiveButtons] = useState(false)

  const gameStartClick = () => {
    setGameStat({
      gameGrid: CreateGameArray(boardSize),
      isGameOver: false,
      gameResult: '',
    })
    setIsActiveButtons(true)
  }

  const setRabbitDirections = (directions) => {
    if (gameStat.isGameOver === true) {
      return
    }
    const charactersMovement = MoveCharacters(gameStat, directions)
    setGameStat(charactersMovement)
  }

  return (
    <div className="board">
      <div className="optionsDiv">
        <StartBtn onClick={gameStartClick} />

        {isActiveButtons ? (
          <div className="arrowsDiv">
            <ArrowButtons
              onClick={() => {
                setRabbitDirections(directions.UP)
              }}
            />

            <div className="leftAndRightDiv">
              <ArrowButtons
                onClick={() => {
                  setRabbitDirections(directions.LEFT)
                }}
              />
              <ArrowButtons
                onClick={() => {
                  setRabbitDirections(directions.RIGHT)
                }}
              />
            </div>
            <ArrowButtons
              onClick={() => {
                setRabbitDirections(directions.DOWN)
              }}
            />
          </div>
        ) : null}

        <CustomSelect options={options} onChange={changeSelectValue} />
      </div>

      {gameStat.isGameOver === true ? (
        <ShowMessage message={gameStat.gameResult} />
      ) : (
        <div className="gameBoardDiv">
          {<GameBoard array={gameStat.gameGrid} />}
        </div>
      )}
    </div>
  )
}

export { GameArea }
