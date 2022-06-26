import React from "react";

const CreateNewBoard = ({onClick,text}) =>{

return (
    <button className="AddNewBoardBtn" onClick ={onClick}> {text}</button>
)

}
export {CreateNewBoard}