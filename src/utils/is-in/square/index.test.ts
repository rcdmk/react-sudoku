import { SQUARE } from 'typings'

import isInSquare from './'

describe('isInSquare', () => {
  it('returns true if the value is in the square', () => {
    const square: SQUARE = [
      [1, 2, 3],
      [7, 8, 9],
      [4, 5, 6],
    ]

    expect(isInSquare({ square, value: 1 })).toBeTruthy()
    expect(isInSquare({ square, value: 3 })).toBeTruthy()
    expect(isInSquare({ square, value: 9 })).toBeTruthy()
  })

  it('returns false if the value is not in the square', () => {
    const square: SQUARE = [
      [1, 0, 3],
      [0, 8, 9],
      [4, 5, 0],
    ]

    expect(isInSquare({ square, value: 2 })).toBeFalsy()
    expect(isInSquare({ square, value: 7 })).toBeFalsy()
    expect(isInSquare({ square, value: 6 })).toBeFalsy()
  })
})
