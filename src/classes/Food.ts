import { Coordinate } from '../share/types'
import { getRandomInteger } from '../share/utils'

class Food {
  private _coord: Coordinate

  constructor (freeCoords: Coordinate[]) {
    this._coord =  this.getRandomCoord(freeCoords)
  }

  get coord (): Coordinate {
    return this._coord
  }

  private getRandomCoord (freeCoords: Coordinate[]): Coordinate {
    const index = getRandomInteger(0, freeCoords.length - 1)
    return freeCoords[index]
  }

  randomSpawn (freeCoords: Coordinate[]) {
    this._coord = this.getRandomCoord(freeCoords)
  }
}

export default Food
