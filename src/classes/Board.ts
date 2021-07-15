import Snake from './Snake'
import Food from './Food'
import { Coordinate } from '../share/types'
import { Directions } from '../share/enums'
import { LENGTH_X, LENGTH_Y } from '../share/constants'

class Board {
  private snake = new Snake()
  private food = new Food(this.getFreeCoords())
  
  get snakeCoords (): Coordinate[] {
    return this.snake.coords
  }

  get foodCoord (): Coordinate {
    return this.food.coord
  }

  changeSnakeDirection (direction: Directions) {
    this.snake.changeDirection(direction)
  }

  snakeMove () {
    this.snake.move()

    if (this.checkIsEat()) {
      this.food.randomSpawn(this.getFreeCoords())
      this.snake.eat()
    }
  }

  private checkIsEat (): boolean {
    return this.snakeCoords.some(coord => coord.y === this.foodCoord.y && coord.x === this.foodCoord.x)
  }

  private getFreeCoords (): Coordinate[] {
    const freeCoords: Coordinate[] = []

    for (let y = 0; y < LENGTH_Y; y++) {
      for (let x = 0; x < LENGTH_X; x++) {
        const isNotFree = this.snakeCoords.some(coord => coord.y === y && coord.x === x)
        if (!isNotFree) freeCoords.push({ y, x })
      }
    }

    return freeCoords
  }
}

export default Board
