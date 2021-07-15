import { FoodEntity } from './FoodEntity'
import { Coordinate } from '../share/types'
import { getRandomInteger } from '../share/utils'

export class FoodService {
  private _food

  constructor (freeCoords: Coordinate[]) {
    this._food = new FoodEntity(this.getRandomCoord(freeCoords))
  }

  private getRandomCoord (freeCoords: Coordinate[]): Coordinate {
    const index = getRandomInteger(0, freeCoords.length - 1)
    return freeCoords[index]
  }

  setRandomCoord (freeCoords: Coordinate[]) {
    this._food.coord = this.getRandomCoord(freeCoords)
  }
}
