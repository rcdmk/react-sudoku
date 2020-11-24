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

    case types.CREATE_NOTIFICATION:
      return {
        ...state,
        notifications: [...(state.notifications || []), action.notification],
      }

    case types.DELETE_NOTIFICATION:
      return {
        ...state,
        notifications: (state.notifications || []).filter((n) => n !== action.notification),
      }

    case types.FILL_BLOCK:
      if (!state.workingGrid || !state.solvedGrid) return state

      state.workingGrid[action.coords[0]][action.coords[1]] = action.value

      let notifications = state.notifications || []

      if (compareArrays(state.workingGrid, state.solvedGrid)) {
        notifications = [
          ...notifications,
          {
            type: 'success',
            title: 'Completed!',
            description: 'Congratulations! Puzzle solved!',
          },
        ]
      } else if (checkGrid(state.workingGrid)) {
        notifications = [
          ...notifications,
          {
            type: 'warning',
            title: 'Invalid solution!',
            description: "The current pattern doesn't represent a possible solution for the puzzle.",
          },
        ]
      }

      return {
        ...state,
        workingGrid: [...state.workingGrid],
        notifications: [...notifications],
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
