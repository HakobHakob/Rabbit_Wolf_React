import { RabbitMove } from './MoveRabbit'
import { MoveWolves } from './MoveWolves'

const MoveCharacters = (gameObject, directions) => {
  const some = RabbitMove(gameObject, directions)

  return MoveWolves(some)
}

export { MoveCharacters }
