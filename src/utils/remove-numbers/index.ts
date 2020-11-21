import { GRID } from 'typings'
import { copyGrid, getRandomIndex, solveGrid } from 'utils'

/**
 * Removes numbers from a full grid to create a sudoku puzzle
 * @param grid a 9X9 sudoku grid
 * @param attempts the number of attempts to solve the grid - (default 5)
 */
function removeNumbers(grid: GRID, attempts = 5) {
  while (attempts > 0) {
    let row = 0
    let col = 0

    do {
      row = getRandomIndex()
      col = getRandomIndex()
    } while (grid[row][col] === 0)

    const backup = grid[row][col]
    grid[row][col] = 0

    const gridCopy = copyGrid(grid)

    if (!solveGrid(gridCopy)) {
      grid[row][col] = backup
      attempts--
    }
  }
}

export default removeNumbers
