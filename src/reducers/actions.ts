import { ToastNotification } from 'components/toast/typings'
import { Action, AnyAction } from 'redux'
import { BLOCK_COORDS, N } from 'typings'

import * as types from './types'

export const createGrid = (): Action => ({ type: types.CREATE_GRID })

export const createNotification = (notification: ToastNotification): AnyAction => ({
  notification,
  type: types.CREATE_NOTIFICATION,
})

export const deleteNotification = (notification: ToastNotification): AnyAction => ({
  notification,
  type: types.DELETE_NOTIFICATION,
})

export const fillBlock = (coords: BLOCK_COORDS, value: N): AnyAction => ({
  coords,
  type: types.FILL_BLOCK,
  value,
})

export const selectBlock = (coords: BLOCK_COORDS): AnyAction => ({
  coords,
  type: types.SELECT_BLOCK,
})
