import { BLOCK_COORDS, GRID } from 'typings'

export interface Reducer {
  puzzleGrid?: GRID
  selectedBlock?: BLOCK_COORDS
  solvedGrid?: GRID
  workingGrid?: GRID
}
