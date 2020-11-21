import React, { Dispatch, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'

import { Reducer, select } from 'reducers'
import { INDEX, N } from 'typings'
import { Container } from './styles'

interface Props {
  colIndex: INDEX
  rowIndex: INDEX
}

interface State {
  isActive: boolean
  value: N
}

const Block: FC<Props> = ({ colIndex, rowIndex }) => {
  const state = useSelector<Reducer, State>(({ grid, selectedBlock }) => ({
    isActive: selectedBlock
      ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
      : false,
    value: grid ? grid[rowIndex][colIndex] : 0,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const handleClick = () => {
    if (!state.isActive) dispatch(select([rowIndex, colIndex]))
  }

  return (
    <Container
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
    >
      {state.value || ''}
    </Container>
  )
}

export default Block
