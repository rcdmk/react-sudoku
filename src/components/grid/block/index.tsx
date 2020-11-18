import React, { FC } from 'react'

import { Container } from './styles'

interface Props {
  colIndex: number
  rowIndex: number
}

const Block: FC<Props> = ({ colIndex, rowIndex }) => {
  return <Container data-cy={`block-${rowIndex}-${colIndex}`} />
}

export default Block
