import { GRID } from 'typings'
import isInCol from './'

describe('isInCol', () => {
  it('returns true when value is in grid column', () => {
    const grid: GRID = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [9, 1, 2, 3, 4, 5, 6, 7, 8],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [7, 8, 9, 1, 2, 3, 4, 5, 6],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [5, 6, 7, 8, 9, 1, 2, 3, 4],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
    ]

    expect(isInCol({ grid, col: 0, value: 9 })).toBeTruthy()
    expect(isInCol({ grid, col: 2, value: 9 })).toBeTruthy()
    expect(isInCol({ grid, col: 4, value: 9 })).toBeTruthy()
    expect(isInCol({ grid, col: 8, value: 9 })).toBeTruthy()
  })

  it('returns false when value is not in grid column', () => {
    const grid: GRID = [
      [1, 2, 3, 4, 5, 6, 7, 8, 0],
      [2, 3, 4, 5, 6, 7, 8, 9, 1],
      [3, 4, 5, 6, 7, 8, 9, 1, 2],
      [4, 5, 6, 7, 8, 9, 1, 2, 3],
      [5, 6, 7, 8, 0, 1, 2, 3, 4],
      [6, 7, 8, 9, 1, 2, 3, 4, 5],
      [7, 8, 0, 1, 2, 3, 4, 5, 6],
      [8, 9, 1, 2, 3, 4, 5, 6, 7],
      [0, 1, 2, 3, 4, 5, 6, 7, 8],
    ]

    expect(isInCol({ grid, col: 0, value: 9 })).toBeFalsy()
    expect(isInCol({ grid, col: 2, value: 9 })).toBeFalsy()
    expect(isInCol({ grid, col: 4, value: 9 })).toBeFalsy()
    expect(isInCol({ grid, col: 8, value: 9 })).toBeFalsy()
  })
})
