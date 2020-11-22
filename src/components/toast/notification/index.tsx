import React, { FC } from 'react'

import { Button, Container, Image, Message, Title } from './styles'
import { Position, Type } from '../typings'

import CheckIcon from 'assets/check.svg'
import ErrorIcon from 'assets/error.svg'
import InfoIcon from 'assets/info.svg'
import WarningIcon from 'assets/warning.svg'

const iconTypes: Record<Type, string> = {
  danger: ErrorIcon,
  info: InfoIcon,
  success: CheckIcon,
  warning: WarningIcon,
}

export interface Props {
  icon?: string
  title?: string
  description?: string
  position?: Position
  type: Type
}

const Notification: FC<Props> = ({ description, icon, position, title, type }) => {
  if (!icon && type) {
    icon = iconTypes[type]
  }

  return (
    <Container data-cy="toast-notification" position={position} className={position} type={type}>
      <Button>X</Button>
      <Image>
        <img src={icon} alt="" />
      </Image>
      <Title>{title}</Title>
      <Message title={description}>{description}</Message>
    </Container>
  )
}

export default Notification
