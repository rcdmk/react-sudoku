import { GRID, INDEXES, NUMBERS } from 'typings'
import { identifySquare, isInCol, isInRow, shuffle } from 'utils'
import checkGrid from 'utils/check-grid'
import isInSquare from 'utils/is-in/square'

const numbers: NUMBERS[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * Recursive backtracking algorithm to fill the grid
 * @param grid a 9x9 GRID (2D array)
 */
function fillGrid(grid: GRID) {
  let row: INDEXES = 0
  let col: INDEXES = 0

  for (let i = 0; i < 81; i++) {
    row = Math.floor(i / 9) as INDEXES
    col = (i % 9) as INDEXES

    if (grid[row][col] === 0) {
      shuffle(numbers)

      for (let value of numbers) {
        if (!isInRow({ grid, row, value })) {
          if (!isInCol({ grid, col, value })) {
            const square = identifySquare({ grid, col, row })
            if (!isInSquare({ square, value })) {
              grid[row][col] = value

              if (checkGrid(grid) || fillGrid(grid)) return true
            }
          }
        }
      }

      break
    }
  }

  grid[row][col] = 0

  return false
}

export default fillGrid
