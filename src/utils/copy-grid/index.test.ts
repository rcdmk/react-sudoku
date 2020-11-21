import { GRID } from 'typings'
import copyGrid from './'

describe('copyGrid', () => {
  it('returns a copy of the provided grid', () => {
    const grid: GRID = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
    ]

    expect(copyGrid(grid)).toStrictEqual<GRID>(grid)
  })

  it('returns a copy that does not modify the original grid', () => {
    const grid: GRID = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
    ]

    const gridCopy = copyGrid(grid)

    gridCopy[0][0] = 9
    gridCopy[0][1] = 9
    gridCopy[1][1] = 9

    expect(grid[0][0]).toBeLessThan(9)
    expect(grid[0][1]).toBeLessThan(9)
    expect(grid[1][1]).toBeLessThan(9)
  })
})
