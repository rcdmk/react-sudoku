import React, { Children, FC } from 'react'
import { useSelector } from 'react-redux'

import { Reducer } from 'reducers'

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

  return (
    <Container className={position} data-cy="toast-container">
      {Children.toArray(
        state.notifications.map((notification) => (
          <Notification
            description={notification.description}
            position={position}
            title={notification.title}
            type={notification.type}
          />
        ))
      )}
    </Container>
  )
}
export default Toast
