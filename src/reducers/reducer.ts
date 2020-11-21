import { AnyAction } from 'redux'

import { copyGrid, createFullGrid, removeNumbers } from 'utils'

import { Reducer } from './interfaces'
import * as types from './types'

const initialState = {}

function reducer(state = initialState, action: AnyAction): Reducer {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid()
      const puzzleGrid = copyGrid(solvedGrid)
      removeNumbers(puzzleGrid)
      const workingGrid = copyGrid(puzzleGrid)

      return {
        ...state,
        puzzleGrid,
        solvedGrid,
        workingGrid,
      }
    case types.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.coords,
      }
    default:
      return state
  }
}

export default reducer
