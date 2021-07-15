import Snake from '../../../src/classes/Snake'
import { Directions } from '../../../src/share/enums'


describe('Snake', () => {
  it('init coords', () => {
    const DEFAULT_COORDS = [{ y: 0, x: 9 }, { y: 1, x: 9 }, { y: 2, x: 9 }]
    const snake = new Snake()
    expect(snake.coords).toStrictEqual(DEFAULT_COORDS)
  })

  // it('change direction back', () => {
  //   const snake = new Snake()

  //   snake.move
  // })

  it.each`
    forward               | back
    ${Directions.Left}    | ${Directions.Right}
  `('test', ({ forward, back }) => {
    const snake = new Snake()

    snake.changeDirection(forward)
    snake.changeDirection(back)

    snake.move()

    // expect(snake.coords).toStrictEqual([{ y: 1, x: 9 }, { y: 2, x: 9 }, { y: 3, x: 8 }])
  })

  it('eat', () => {
    const snake = new Snake()
    const EATING_COORDS = [{ y: 0, x: 9 }, { y: 1, x: 9 }, { y: 2, x: 9 }, { y: 3, x: 9 }]

    snake.eat()
    snake.move()

    expect(snake.coords).toStrictEqual(EATING_COORDS)
  })

  it.todo('changeDirection')
  it.todo('move')
})
