import React from 'react'
import './App.css'

const Square = (props) => {
  let characterDatas = {
    rabbit: { name: 'r', src: '../img/nap.png', count: 1 },
    wolf: { name: 'w', src: '../img/wolf.png' },
    home: { name: 'h', src: '../img/home.png', count: 1 },
    fence: { name: 'f', src: '../img/fence.png' },
  }
  const characterImg = props.img

  if (characterImg === characterDatas.rabbit.name) {
    return <img src={characterDatas.rabbit.src} alt="Rabbit" />
  }
  if (characterImg === characterDatas.wolf.name) {
    return <img src={characterDatas.wolf.src} alt="Wolf" />
  }
  if (characterImg === characterDatas.fence.name) {
    return <img src={characterDatas.fence.src} alt="Fence" />
  }
  if (characterImg === characterDatas.home.name) {
    return <img src={characterDatas.home.src} alt="Home" />
  }

  return <div className="emptyCells"></div>
}

export { Square }
