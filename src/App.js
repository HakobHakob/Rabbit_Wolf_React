import React from "react";
import {useState} from "react";
import { GameArea } from "./GameArea";
import { CreateNewBoard } from "./NewGameBoardBtn";

let count = 0
function App() {  

  const [component, setComponent]  = useState([])

    function addComponent(){
      setComponent([...component, count + 1])
      count++
    }

return (
  <div className="App">
    <CreateNewBoard onClick = {addComponent} text = {"Create board"} />
    {component.map((item)=>{return <GameArea key = {item}/>})}
  </div>
)
   
}
export default App


