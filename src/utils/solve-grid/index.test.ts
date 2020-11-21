import { GRID } from 'typings'

import solveGrid from './'

describe('solveGrid', () => {
  it('returns true if the provided grid is already solved', () => {
    const grid: GRID = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
    ]

    expect(solveGrid(grid)).toBeTruthy()

    for (let row of grid) {
      expect(row).not.toContain(0)
    }
  })

  it('returns true if the provided grid is solvable', () => {
    const grid: GRID = [
      [1, 2, 3, 4, 5, 6, 7, 8, 0],
      [7, 8, 0, 1, 2, 3, 4, 5, 6],
      [4, 5, 6, 0, 8, 9, 1, 2, 3],
      [2, 3, 4, 5, 6, 7, 0, 9, 1],
      [5, 6, 7, 8, 9, 1, 2, 0, 4],
      [8, 9, 1, 2, 3, 0, 5, 6, 7],
      [0, 4, 5, 6, 7, 8, 9, 1, 2],
      [6, 0, 8, 9, 1, 2, 3, 4, 5],
      [9, 1, 2, 3, 0, 5, 6, 7, 8],
    ]

    expect(solveGrid(grid)).toBeTruthy()

    for (let row of grid) {
      expect(row).not.toContain(0)
    }
  })

  it('returns false if the provided grid is not solvable', () => {
    // first square is missing a 9, but there is already a 9 in the same row
    const grid: GRID = [
      [1, 2, 3, 4, 5, 6, 7, 8, 0],
      [7, 8, 0, 1, 2, 3, 4, 5, 9],
      [4, 5, 6, 0, 8, 9, 1, 2, 3],
      [2, 3, 4, 5, 6, 7, 0, 9, 1],
      [5, 6, 7, 8, 9, 1, 2, 0, 4],
      [8, 9, 1, 2, 3, 0, 5, 6, 7],
      [0, 4, 5, 6, 7, 8, 9, 1, 2],
      [6, 0, 8, 9, 1, 2, 3, 4, 5],
      [9, 1, 2, 3, 0, 5, 6, 7, 8],
    ]

    expect(solveGrid(grid)).toBeFalsy()
  })
})
