import { NUMBERS, SQUARE } from 'typings'

interface Input {
  square: SQUARE
  value: NUMBERS
}

/**
 * Returns true if the value exists in the square
 * @param input Object with a 3x3 square and a value to search for
 */
function isInSquare({ square, value }: Input): boolean {
  return [...square[0], ...square[1], ...square[2]].includes(value)
}

export default isInSquare
