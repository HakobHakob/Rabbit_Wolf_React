import { useState } from "react";
import { GameArea } from "./GameArea";
import { CreateNewBoard } from "./NewGameBoardBtn";


function App() {  
  
  let select = <GameArea /> 

  const [component, setComponent]  = useState([])


    function addComponent(){
      
      setComponent([...component, select])
    }

  return (
    <div className='App'>
        <CreateNewBoard text = "New Board" onClick = {addComponent}/> 

        {component.map((item,i)=>{return <div key ={i}>{item}</div>})}
       
    </div>
  )
   
}
export default App


