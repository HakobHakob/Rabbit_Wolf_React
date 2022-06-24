import React from 'react'
import { useState } from 'react'
import { GameGrid } from './RendGameBoard'
import { StartBtn } from './StartBtn'



const options = [
  { id: '5', value: 5, label: '5 x 5' },
  { id: '7', value: 7, label: '7 x 7' },
  { id: '10', value: 10, label: '10 x 10' },
]


function CustomSelect(props) { 
  const [value, setValue] = useState()

  const [gamePlaceArr, setGamePlaceArr] = useState([])

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleClick = () => { 
    console.log(value)
   
    return (
      <div>
         
         value
      </div>
    )    
  }

  function handleValue(){
    setGamePlaceArr([...gamePlaceArr,value])
  }

  
  return (
    <div>
      
      <StartBtn onClick={handleClick} />     
      
      <select className="select" value={options.value} onChange={handleChange}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <GameGrid value = {handleValue} />
    </div>
  )
}

export { CustomSelect }




