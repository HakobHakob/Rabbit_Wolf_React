import React from "react";

const CreateNewBoard = (props) =>{


return (
    <button className="AddNewBoardBtn" onClick ={props.onClick}> {props.text}</button>
)

}
export {CreateNewBoard}