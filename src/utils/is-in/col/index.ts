import { GRID, INDEX, NUMBERS } from 'typings'

interface Input {
  col: INDEX
  grid: GRID
  value: NUMBERS
}

/**
 * Returns true if value is contained in the column
 * @param input Object with 9x9 grid, a col index and value to search
 */
function isInCol({ grid, col, value }: Input) {
  for (let i = 0; i < 9; i++) {
    if (grid[i][col] === value) return true
  }

  return false
}

export default isInCol
