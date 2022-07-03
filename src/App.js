import React from "react";
import {useState} from "react";
import { GameArea } from "./GameArea";
import { CreateNewBoard } from "./NewGameBoardBtn";


function App() {  

  const [gameBoardNumber, setGameBoardNumber]  = useState([])

    function addGameBoardnumber(){
      setGameBoardNumber([...gameBoardNumber, gameBoardNumber.length + 1])     
    }

return (
  <div className="App">
    <CreateNewBoard onClick = {addGameBoardnumber} text = {"Create board"} />
    {gameBoardNumber.map((item)=>{return <GameArea key = {item}/>})}
  </div>
)
   
}
export default App


