import { AnyAction } from 'redux'

import { checkGrid, compareArrays, copyGrid, createFullGrid, removeNumbers } from 'utils'

import { Reducer } from './interfaces'
import * as types from './types'

const initialState: Reducer = {}

function reducer(state = initialState, action: AnyAction): Reducer {
  switch (action.type) {
    case types.CREATE_GRID:
      const solvedGrid = createFullGrid()
      const puzzleGrid = copyGrid(solvedGrid)
      removeNumbers(puzzleGrid)
      const workingGrid = copyGrid(puzzleGrid)

      return {
        ...state,
        selectedBlock: undefined,
        puzzleGrid,
        solvedGrid,
        workingGrid,
      }

    case types.FILL_BLOCK:
      if (!state.workingGrid || !state.solvedGrid) return state

      state.workingGrid[action.coords[0]][action.coords[1]] = action.value

      if (compareArrays(state.workingGrid, state.solvedGrid)) {
        alert('Completed!')
      } else if (checkGrid(state.workingGrid)) {
        alert('Invalid solution')
      }

      return {
        ...state,
        workingGrid: [...state.workingGrid],
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
