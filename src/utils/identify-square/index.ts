import { GRID, INDEX, SQUARE } from 'typings'

interface Input {
  col: INDEX
  grid: GRID
  row: INDEX
}

/**
 * Returns the 3X3 square that matches the corresponding column and row indexes in the Sudoku grid
 * @param input An object with a 9X9 sudoku grid, a column index and a row index
 */
function identifyWorkingSquare({ col, grid, row }: Input): SQUARE {
  const square = []

  const colStart = Math.floor(col / 3) * 3
  const rowStart = Math.floor(row / 3) * 3

  for (let y = rowStart; y < rowStart + 3; y++) {
    square.push([
      grid[y][colStart],
      grid[y][colStart + 1],
      grid[y][colStart + 2],
    ])
  }

  return square as SQUARE
}

export default identifyWorkingSquare
