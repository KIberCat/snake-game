import Game from './classes/Game'
import { Directions } from './share/enums'

window.addEventListener('load', () => {
  const game = new Game()

  document.addEventListener('keydown', event => {
    switch (event.key) {
      case 'ArrowUp':
        game.changeSnakeDirection(Directions.Top)
        break
      case 'ArrowRight':
        game.changeSnakeDirection(Directions.Right)
        break
      case 'ArrowDown':
        game.changeSnakeDirection(Directions.Bottom)
        break
      case 'ArrowLeft':
        game.changeSnakeDirection(Directions.Left)
        break
      case 'Enter':
        game.stop()
        break
    }
  })

  game.start()
})
