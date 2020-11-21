import { GRID, INDEX, NUMBERS } from 'typings'
import { checkGrid, identifySquare, isInCol, isInRow, isInSquare } from 'utils'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * Returns true if the sudoku grid has a valid solution
 * @param grid a 9X9 sudoku puzzle grid
 */
function solveGrid(grid: GRID): boolean {
  if (checkGrid(grid)) return true

  let row: INDEX = 0
  let col: INDEX = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9) as INDEX
    col = (i % 9) as INDEX

    if (grid[row][col] !== 0) continue

    for (let value of numbers) {
      if (isInRow({ grid, row, value })) continue
      if (isInCol({ grid, col, value })) continue

      const square = identifySquare({ grid, col, row })
      if (isInSquare({ square, value })) continue

      grid[row][col] = value

      if (checkGrid(grid) || solveGrid(grid)) return true
    }
  }

  grid[row][col] = 0

  return false
}

export default solveGrid
