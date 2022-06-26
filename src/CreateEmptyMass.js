import React from 'react'

    const characterDatas = {
    rabbit: { name: 'r', src: 'img/nap.png', count: 1 },
    wolf: { name: 'w', src: 'img/wolf.png' },
    home: { name: 'h', src: 'img/home.png', count: 1 },
    fence: { name: 'f', src: 'img/fence.png' },
  }
  const RABBIT = characterDatas.rabbit.name
  const WOLF = characterDatas.wolf.name
  const HOME = characterDatas.home.name
  const FENCE = characterDatas.fence.name
  const FREE_CELL = 0


  function getRandomPosition(gamePlaceArr) {
    const x = Math.floor(Math.random() * gamePlaceArr.length)
    const y = Math.floor(Math.random() * gamePlaceArr.length)
  
    if (gamePlaceArr[x][y] === FREE_CELL) {
      return [x, y]
    } else {
      return getRandomPosition(gamePlaceArr)
    }
  }

  function setCharacterAtRandomPosition(gamePlaceArr, character) {
    const [x, y] = getRandomPosition(gamePlaceArr)
    gamePlaceArr[x][y] = character
  }


  function setCharacters(gamePlaceArr, character, characterCount) {
    for (let i = 0; i < characterCount; i++) {
      setCharacterAtRandomPosition(gamePlaceArr, character)
    }
  }

    
  function CreateGameArray(gameBoardSize){

    const gameGrid = createEmptyMass(gameBoardSize)
    const wolfCount = Math.ceil((60 * gameBoardSize) / 100)
    const fenceCount = Math.ceil((40 * gameBoardSize) / 100)
    setCharacters(gameGrid, WOLF, wolfCount) 
    setCharacters(gameGrid, FENCE, fenceCount)
    setCharacters(gameGrid, RABBIT, 1)
    setCharacters(gameGrid, HOME, 1)



return gameGrid
  }

  function createEmptyMass(gameBoardSize) {
    const gameBoard = new Array(gameBoardSize)
      .fill(FREE_CELL)
      .map(() => new Array(gameBoardSize).fill(FREE_CELL))
  
    return gameBoard
  }

export {CreateGameArray}