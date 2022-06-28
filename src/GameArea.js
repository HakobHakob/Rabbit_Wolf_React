import React from 'react'
import { useState } from 'react'
import { ArrowButtons } from './ArrowButtons'
import { CreateGameArray } from './CreateEmptyMass'
import { CustomSelect } from './CustomSelect'
import { GameBoard } from './RendGameBoard'
import { StartBtn } from './StartBtn'
import { RabbitMove } from './MoveRabbit'
import { MoveWolves } from './MoveWolves'

const options = [
  { id: '5', value: 5, label: '5 x 5' },
  { id: '7', value: 7, label: '7 x 7' },
  { id: '10', value: 10, label: '10 x 10' },
]
const directions = {
  UP: 0,
  DOWN: 1,
  RIGHT: 2,
  LEFT: 3,
}

function GameArea(props) {
  const [value, setValue] = useState(5)

  const [gamePlaceArr, setGamePlaceArr] = useState([])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    setGamePlaceArr(CreateGameArray(parseInt(value)))
  }

  const handleInput = (directions) => {
    setGamePlaceArr([...RabbitMove(gamePlaceArr, directions)])

    MoveWolves(gamePlaceArr)
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

      <div className="gameBoardDiv">{<GameBoard array={gamePlaceArr} />}</div>
    </div>
  )
}

export { GameArea }
