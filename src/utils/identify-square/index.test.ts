import { GRID } from 'typings'

import identifySquare from './'

describe('identifySquare', () => {
  it('identifies the correct square in given grid, column and row', () => {
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

    expect(identifySquare({ grid, col: 2, row: 2 })).toStrictEqual([
      [1, 2, 3],
      [7, 8, 9],
      [4, 5, 6],
    ])

    expect(identifySquare({ grid, col: 5, row: 4 })).toStrictEqual([
      [5, 6, 7],
      [9, 1, 2],
      [3, 4, 5],
    ])

    expect(identifySquare({ grid, col: 7, row: 8 })).toStrictEqual([
      [5, 6, 7],
      [9, 1, 2],
      [2, 3, 4],
    ])
  })
})
