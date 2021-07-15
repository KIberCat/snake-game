import { Coordinate } from '../share/types'

export class FoodView {
  private _ctx: CanvasRenderingContext2D

  constructor (ctx: CanvasRenderingContext2D) {
    this._ctx = ctx
  }

  drawFood (coord: Coordinate) {
    this._ctx.fillStyle = 'red'
  }
}
