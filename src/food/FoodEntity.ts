import { Coordinate } from '../share/types'

export class FoodEntity {
  private _coord: Coordinate

  constructor (coord: Coordinate) {
    this._coord = coord
  }

  get coord (): Coordinate {
    return this._coord
  }

  set coord (coord: Coordinate) {
    this._coord = coord
  }
}
