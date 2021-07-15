import { Coordinate } from '../share/types'
import { LENGTH_Y, LENGTH_X } from '../share/constants'

const PADDING = 4

const CELL_HEIGHT = 30
const CELL_WIDTH = 30

const HEIGHT = LENGTH_Y * CELL_HEIGHT
const WIDTH = LENGTH_X * CELL_WIDTH

class View {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D

  constructor () {
    this.canvas = <HTMLCanvasElement> document.getElementById('canvas')!
    this.ctx = this.canvas.getContext('2d')!
  }

  init (snakeCoords: Coordinate[], foodCoord: Coordinate) {
    this.canvas.width = WIDTH
    this.canvas.height = HEIGHT

    this.drawCanvas()
    this.drawSnake(snakeCoords)
    this.drawFood(foodCoord)
  }

  update (snakeCoords: Coordinate[], foodCoord: Coordinate) {
    this.clearAll()
    this.drawCanvas()
    this.drawSnake(snakeCoords)
    this.drawFood(foodCoord)
  }

  private drawCanvas () {
    this.ctx.lineWidth = 4
    this.ctx.strokeStyle = '#000'
    this.ctx.strokeRect(0, 0, WIDTH, HEIGHT)
  }

  private drawSnake (coords: Coordinate[]) {
    coords.forEach(coord => {
      const y = coord.y * CELL_HEIGHT
      const x = coord.x * CELL_WIDTH
      const width = CELL_WIDTH
      const height = CELL_HEIGHT

      const radius = 20

      this.ctx.lineJoin = 'round'
      this.ctx.lineWidth = radius

      this.ctx.fillStyle = '#000'
      this.ctx.strokeRect(x + (radius / 2), y + (radius / 2), width - radius, height - radius)
      this.ctx.fillRect(x + (radius / 2), y + (radius / 2), width - radius, height - radius)
    })
  }

  private drawFood (coord: Coordinate) {
    const y = coord.y * CELL_HEIGHT
    const x = coord.x * CELL_WIDTH
    const width = CELL_WIDTH
    const height = CELL_HEIGHT

    // const image = new Image(width, height)
    // image.src = 'https://cdn.icon-icons.com/icons2/1166/PNG/512/1488897578-apple_81769.png'
    // this.ctx.drawImage(image, x, y, width, height)

    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(x, y, width, height)
  }

  private clearAll () {
    this.ctx.clearRect(0, 0, WIDTH, HEIGHT)
  }
}

export default View
