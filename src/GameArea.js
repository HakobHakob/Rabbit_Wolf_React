import React from 'react'
import { useState } from 'react'
import { ArrowButtons } from './ArrowButtons'
import { CreateGameArray } from './CreateEmptyMass'
import { CustomSelect } from './CustomSelect'
import { GameBoard } from './RendGameBoard'
import { StartBtn } from './StartBtn'

const options = [
  { id: '5', value: 5, label: '5 x 5' },
  { id: '7', value: 7, label: '7 x 7' },
  { id: '10', value: 10, label: '10 x 10' },
]

function GameArea(props) {
  const [value, setValue] = useState(5)
  const [gamePlaceArr, setGamePlaceArr] = useState([])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => {
    setGamePlaceArr(CreateGameArray(parseInt(value)))
  }

  return (
    <div className="board">
      <div className="optionsDiv">
        <StartBtn onClick={handleClick} />

        <ArrowButtons />

        <CustomSelect options={options} onChange={handleChange} />
      </div>

      <div className="gameBoardDiv">{<GameBoard array={gamePlaceArr} />}</div>
    </div>
  )
}

export { GameArea }
