import Board from './Board'
import View from './View'
import { Coordinate } from '../share/types'
import { GameStatuses, Directions } from '../share/enums'
import { LENGTH_X, LENGTH_Y } from '../share/constants'

const TIME = 300

class Game {
  private board = new Board()
  private view = new View()
  private RAFId = 0
  private lastTime = 0

  private handler (timestamp: number) {
    if ((timestamp - this.lastTime) < TIME) {
      this.RAFId = window.requestAnimationFrame((time) => this.handler(time))
      return
    }

    this.lastTime = timestamp

    this.board.snakeMove()
    this.view.update(this.board.snakeCoords, this.board.foodCoord)

    this.RAFId = window.requestAnimationFrame((time) => this.handler(time))
  }

  start () {
    this.view.init(this.board.snakeCoords, this.board.foodCoord)
    this.RAFId = window.requestAnimationFrame((time) => this.handler(time))
  }

  stop () {
    window.cancelAnimationFrame(this.RAFId)
  }

  changeSnakeDirection (direction: Directions) {
    this.board.changeSnakeDirection(direction)
  }

  // private checkIsLosing (): boolean {
  //   for (let i = 0; i < this.board.snakeCoords.length; i++) {
  //     const isFind = this.board.snakeCoords
  //       .filter((_, index) => i !== index)
  //       .some(coord => coord.x === this.board.snakeCoords[i].x && coord.y === this.board.snakeCoords[i].y)
      
  //     if (isFind) return true
  //   }

  //   return false
  // }

  // private checkIsWin (): boolean {
  //   return this.board.snakeCoords.length >= (LENGTH_X * LENGTH_Y)
  // }

  // private getStatusGame (): GameStatuses {
  //   const isLosing = this.checkIsLosing()
  //   const isWin = this.checkIsWin()

  //   if (isLosing) return GameStatuses.Losing
  //   if (isWin) return GameStatuses.Win
  //   return GameStatuses.Plaing
  // }
}

export default Game

//   private checkIsEnd (): boolean {
//     const isLosing = this.checkIsLosing()
//     const isWin = this.checkIsWin()
//     return isLosing || isWin
//   }
