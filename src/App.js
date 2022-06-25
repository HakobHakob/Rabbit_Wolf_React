import { useState } from "react";
import { CustomSelect } from "./CustomSelect";
import { GameBoard } from "./GameBoard";
import { CreateNewBoard } from "./NewGameBoardBtn";


function App() {  
  
  let select = <CustomSelect />

 

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


