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

function findCordOfCharacter(gamePlaceArr, character) {
  const findInGameplace = function(accumulator, row, x) {
    row.forEach((element, y) => {
      if (element === character) {
        accumulator.push([x, y])
      }
    })
    return accumulator
  }
  return gamePlaceArr.reduce(findInGameplace, [])
}

function rabbitCoordinatesForNewCell([x, y]) {
  return [
    [x - 1, y],
    [x + 1, y],
    [x, y + 1],
    [x, y - 1],
  ]
}

function rabbitCoordsForCorrect([x, y], gamePlaceArr) {
  const maxValue = gamePlaceArr.length
  x = (x + maxValue) % maxValue
  y = (y + maxValue) % maxValue
  return [x, y]
}

function arrangeNewCoordinates(gamePlaceArr, newCoordsData) {
  return newCoordsData.map(([x, y]) =>
    rabbitCoordsForCorrect([x, y], gamePlaceArr)
  )
}

function setRabbitInNewCoordinates(
  gamePlaceArr,
  rabbitNewCoordinates,
  rabbitCord,
  arrow
) {
  const [x, y] = rabbitCord
  const [newX, newY] = rabbitNewCoordinates[arrow]

  switch (gamePlaceArr[newX][newY]) {
    case FREE_CELL:
      gamePlaceArr[newX][newY] = RABBIT
      gamePlaceArr[x][y] = FREE_CELL
      break

    case HOME:
      gamePlaceArr[x][y] = FREE_CELL
      //   gameStat.gameResult = 'win'
      // showGameMessages(gameStat)
      break

    case FENCE:
      return

    case WOLF:
      //   gameStat.gameResult = 'over'
      // showGameMessages(gameStat)
      break
  }
  return gamePlaceArr
}

function setRabbitInNewCell(gamePlaceArr, arrow) {
  // if (gameStat.isGameOver === true) {
  //   return
  // } else {

  const rabbitCord = findCordOfCharacter(gamePlaceArr, RABBIT)[0]

  const newCoordsData = rabbitCoordinatesForNewCell(rabbitCord)

  const rabbitNewCoordinates = arrangeNewCoordinates(
    gamePlaceArr,
    newCoordsData
  )

  const rabbitInNewCoordinates = setRabbitInNewCoordinates(
    gamePlaceArr,
    rabbitNewCoordinates,
    rabbitCord,
    arrow
  )
  return rabbitInNewCoordinates
}
//   }

function RabbitMove(gameStat, rabbitDirection) {
  return setRabbitInNewCell(gameStat, rabbitDirection)
}
export { RabbitMove }
