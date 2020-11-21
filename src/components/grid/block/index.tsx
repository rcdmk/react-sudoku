import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { Reducer } from 'reducers'

import { N } from 'typings'
import { Container } from './styles'

interface Props {
  colIndex: number
  rowIndex: number
}

interface State {
  value: N
}

const Block: FC<Props> = ({ colIndex, rowIndex }) => {
  const state = useSelector<Reducer, State>(({ grid }) => ({
    value: grid ? grid[rowIndex][colIndex] : 0,
  }))

  return (
    <Container data-cy={`block-${rowIndex}-${colIndex}`}>
      {state.value || ''}
    </Container>
  )
}

export default Block
