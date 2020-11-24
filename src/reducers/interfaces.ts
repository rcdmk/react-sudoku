import { ToastNotification } from 'components/toast/typings'
import { BLOCK_COORDS, GRID } from 'typings'

export interface Reducer {
  notifications?: ToastNotification[]
  puzzleGrid?: GRID
  selectedBlock?: BLOCK_COORDS
  solvedGrid?: GRID
  workingGrid?: GRID
}
