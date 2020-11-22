import React, { FC, useEffect, useState } from 'react'

import Notification, { Props as NotificationProps } from './notification'
import { Container } from './styles'
import { Position } from './typings'

interface Props {
  position?: Position
  notifications?: NotificationProps[]
}

const Toast: FC<Props> = ({ position, notifications = [] }) => {
  const [list, setList] = useState(notifications)

  useEffect(() => {
    setList(notifications)
  }, [notifications, list])

  return (
    <Container position={position} className={position} data-cy="toast-container">
      {list.map((notification) => (
        <Notification
          description={notification.description}
          position={position}
          title={notification.title}
          type={notification.type}
        />
      ))}
    </Container>
  )
}
export default Toast
