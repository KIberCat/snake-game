import Food from '../../../src/classes/Food'
import { getRandomInteger } from '../../../src/share/utils'

jest.mock('../../../src/share/utils')
const mockGetRandomInteger = getRandomInteger as jest.Mock

const fixtureCoords = [{ y: 0, x: 0 }, { y: 1, x: 1 }, { y: 2, x: 2 }]

describe('Food', () => {
  it('empty initial coord', () => {
    mockGetRandomInteger.mockReturnValueOnce(0)
    const food = new Food([])

    expect(mockGetRandomInteger).toHaveBeenCalledWith(0, -1)
    expect(food.coord).toBeUndefined()
  })

  it('random initial coord', () => {
    const INDEX = 1
    mockGetRandomInteger.mockReturnValueOnce(INDEX)
    const food = new Food(fixtureCoords)

    expect(mockGetRandomInteger).toHaveBeenCalledWith(0, 2)
    expect(food.coord).toStrictEqual(fixtureCoords[INDEX])
  })

  it('random set coord', () => {
    const INDEX = 1
    mockGetRandomInteger
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(INDEX)
    const food = new Food([])

    food.randomSpawn(fixtureCoords)

    expect(mockGetRandomInteger).toHaveBeenCalledWith(0, 2)
    expect(food.coord).toStrictEqual(fixtureCoords[INDEX])
  })
})
