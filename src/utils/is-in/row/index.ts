import { GRID, INDEXES, NUMBERS } from 'typings'

interface Input {
  grid: GRID
  row: INDEXES
  value: NUMBERS
}

/**
 * Returns true if value is contained in the row
 * @param input Object with 9x9 grid, a row index and value to search
 */
function isInRow({ grid, row, value }: Input) {
  return grid[row].includes(value)
}

export default isInRow
