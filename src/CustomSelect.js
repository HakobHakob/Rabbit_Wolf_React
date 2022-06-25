import React from 'react'
import { useState } from 'react'
import { CreateGameArray } from './CreateEmptyMass'
import { GameGrid } from './RendGameBoard'
import { StartBtn } from './StartBtn'



const options = [
  { id: '5', value: 5, label: '5 x 5' },
  { id: '7', value: 7, label: '7 x 7' },
  { id: '10', value: 10, label: '10 x 10' },
]

function CustomSelect(props) { 
  const [value, setValue] = useState(5)
  const [gamePlaceArr, setGamePlaceArr] = useState([])

 
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => {   
    setGamePlaceArr(CreateGameArray(parseInt(value)))
  }

  console.log(gamePlaceArr)
  return (
    <div>
      
      <StartBtn onClick={handleClick} />     
      
      <select className="select" onChange={handleChange}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
     {<GameGrid array = {gamePlaceArr}/>}
      
    </div>
  )
}

export { CustomSelect }




