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

const GameArea = () => {
  const [value, setValue] = useState(5)

  const [gameStat, setGamePlaceArr] = useState({
    gamePlaceArr: [],
    isGameOver: false,
    gameResult: '',
  })

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    setGamePlaceArr({
      gamePlaceArr: CreateGameArray(parseInt(value)),
      isGameOver: false,
      gameResult: '',
    })
  }

  const handleInput = (directions) => {
    if (gameStat.isGameOver === true) {
      return
    }

    const charactersStep = MoveCharacters(gameStat, directions)

    setGamePlaceArr(charactersStep)
  }

  return (
    <div className="board">
      <div className="optionsDiv">
        <StartBtn onClick={handleClick} />

        <div className="arrowsDiv">
          <ArrowButtons
            onClick={() => {
              handleInput(directions.UP)
            }}
          />

          <div className="leftAndRightDiv">
            <ArrowButtons
              onClick={() => {
                handleInput(directions.LEFT)
              }}
            />
            <ArrowButtons
              onClick={() => {
                handleInput(directions.RIGHT)
              }}
            />
          </div>
          <ArrowButtons
            onClick={() => {
              handleInput(directions.DOWN)
            }}
          />
        </div>

        <CustomSelect options={options} onChange={handleChange} />
      </div>
      {gameStat.isGameOver === true ? (
        <ShowMessage message={gameStat.gameResult} />
      ) : (
        <div className="gameBoardDiv">
          {<GameBoard array={gameStat.gamePlaceArr} />}
        </div>
      )}
    </div>
  )
}

export { GameArea }
