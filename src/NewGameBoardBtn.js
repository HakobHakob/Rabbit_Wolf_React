import React from 'react'

const CreateNewBoard = ({ onClick }) => {
  return (
    <button className="AddNewBoardBtn" onClick={onClick}>
      Create New Board
    </button>
  )
}
export { CreateNewBoard }
