import React, { Children, Dispatch, FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteNotification, Reducer } from 'reducers'
import { AnyAction } from 'redux'

import Notification from './notification'
import { Container } from './styles'
import { Position, ToastNotification } from './typings'

interface Props {
  position?: Position
}

interface State {
  notifications: ToastNotification[]
}

const Toast: FC<Props> = ({ position }) => {
  const state = useSelector<Reducer, State>(({ notifications = [] }) => ({
    notifications,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const onDelete = useCallback(
    (notification: ToastNotification) => {
      dispatch(deleteNotification(notification))
    },
    [dispatch]
  )

  return (
    <Container className={position} data-cy="toast-container">
      {Children.toArray(
        state.notifications.map((notification) => (
          <Notification
            description={notification.description}
            position={position}
            onDelete={() => onDelete(notification)}
            title={notification.title}
            type={notification.type}
          />
        ))
      )}
    </Container>
  )
}
export default Toast
