import { GRID } from 'typings'

/**
 * returns true if the grid is a valid sudoku grid
 * @param grid A 9X9 sudoku grid
 */
function checkGrid(grid: GRID): boolean {
  for (let row of grid) {
    if (row.includes(0)) return false
  }

  return true
}

export default checkGrid
