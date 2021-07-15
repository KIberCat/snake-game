import { FoodEntity } from './FoodEntity'
import { FoodService } from './FoodService'
import { FoodView } from './FoodView'
import { Coordinate } from '../share/types'

class FoodFacade {
  private foodView: FoodView
  private foodService: FoodService

  constructor (freeCoords: Coordinate[], ctx: CanvasRenderingContext2D) {
    this.foodView = new FoodView(ctx)
    this.foodService = new FoodService(freeCoords)
  }

  drawFood () {}
}
