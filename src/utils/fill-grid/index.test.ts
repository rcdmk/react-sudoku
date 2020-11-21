import { GRID } from 'typings'

import fillGrid from './'

describe('fillGrid', () => {
  it('fills a grid with a random sudoku pattern', () => {
    const grid: GRID = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
    ]

    expect(fillGrid(grid)).toBeTruthy()

    expect(grid).toHaveLength(9)

    for (let row of grid) {
      expect(row).toHaveLength(9)

      for (let num of row) {
        expect(num).toBeGreaterThanOrEqual(1)
        expect(num).toBeLessThanOrEqual(9)
      }
    }
  })

  it('fills a partially filled grid with a random sudoku pattern', () => {
    const grid: GRID = [
      [0, 0, 0, 0, 2, 0, 0, 0, 0],
      [0, 3, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 7, 0],
      [0, 0, 5, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 4, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 2, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 9, 0],
    ]

    expect(fillGrid(grid)).toBeTruthy()

    expect(grid).toHaveLength(9)

    for (let row of grid) {
      expect(row).toHaveLength(9)

      for (let num of row) {
        expect(num).toBeGreaterThanOrEqual(1)
        expect(num).toBeLessThanOrEqual(9)
      }
    }
  })
})
