import { GRID } from 'typings'

import removeNumbers from './'

describe('removeNumbers', () => {
  it('removes numbers from the grid', () => {
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

    removeNumbers(grid, 1)

    let foundZero = false

    for (let row of grid) {
      if (row.includes(0)) {
        foundZero = true
        break
      }
    }

    expect(foundZero).toBeTruthy()
  })
})
