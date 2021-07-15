import { Coordinate } from '../share/types'
import { Directions } from '../share/enums'
import { LENGTH_Y, LENGTH_X, SNAKE_LENGTH } from '../share/constants'

class Snake {
  private _coords: Coordinate[] = this.initCoords()
  private direction: Directions = Directions.Bottom
  private food: Coordinate | null = null
  private isDirectionChanged = false

  get coords (): Coordinate[] {
    return this._coords
  }

  private initCoords (): Coordinate[] {
    const coords: Coordinate[] = []

    for (let i = 0; i < SNAKE_LENGTH; i++) {
      coords.push({
        y: i,
        x: Math.floor((LENGTH_X - 1) / 2)
      })
    }

    return coords
  }

  changeDirection (direction: Directions) {
    if (this.isDirectionChanged) return
    
    if (this.direction === Directions.Top && direction === Directions.Bottom) return
    if (this.direction === Directions.Bottom && direction === Directions.Top) return
    if (this.direction === Directions.Right && direction === Directions.Left) return
    if (this.direction === Directions.Left && direction === Directions.Right) return

    this.direction = direction
    this.isDirectionChanged = true
  }

  eat () {
    this.food = this._coords[0]
  }

  private checkFood () {
    if (this.food) {
      this._coords.unshift(this.food)
      this.food = null
    }
  }

  move () {
    this.isDirectionChanged = false
    this.checkFood()

    const coords = this.coords.slice(1)
    let { y, x } = this.coords[this.coords.length - 1]

    switch (this.direction) {
      case Directions.Top:
        y--
        break
      case Directions.Right:
        x++
        break
      case Directions.Bottom:
        y++
        break
      case Directions.Left:
        x--
        break
    }

    if (y > LENGTH_Y - 1) y = 0
    if (y < 0) y = LENGTH_Y - 1
    if (x > LENGTH_X - 1) x = 0
    if (x < 0) x = LENGTH_X - 1

    this._coords = [...coords, { y, x }]
  }
}

export default Snake
