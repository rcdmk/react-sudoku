import { GRID } from 'typings'
import { createFullGrid } from 'utils'

describe('createFullGrid', () => {
  it('returns a 9X9 grid with numbers ranging from 1 to 9', () => {
    const grid: GRID = createFullGrid()

    for (let row of grid) {
      for (let num of row) {
        expect(num).toBeGreaterThanOrEqual(1)
        expect(num).toBeLessThanOrEqual(9)
      }
    }
  })
})
