import React from 'react'
import './App.css'

const Square = (props) => {

  let characterDatas = {
    rabbit: { name: 'r', src: '../img/nap.png', count: 1 },
    wolf: { name: 'w', src: '../img/wolf.png' },
    home: { name: 'h', src: '../img/home.png', count: 1 },
    fence: { name: 'f', src: '../img/fence.png' },
  }
  const box = props.img

  if (box === characterDatas.rabbit.name) {

    return <img src={characterDatas.rabbit.src} />

  } 
  if (box === characterDatas.wolf.name) {

    return <img src={characterDatas.wolf.src} />

  }
  if (box === characterDatas.fence.name) {

    return <img src={characterDatas.fence.src} />

  } 
  if (box === characterDatas.home.name) {

    return <img src={characterDatas.home.src} />
  }


  return (    
       <div className="emptyCells"></div>          
  )
}

export { Square }