import { GRID } from 'typings'

/**
 * Returns true if the grid has no zeroes
 * @param grid A 9X9 sudoku grid
 */
function checkGrid(grid: GRID): boolean {
  for (let row of grid) {
    if (row.includes(0)) return false
  }

  return true
}

export default checkGrid
