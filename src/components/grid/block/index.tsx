import React, { Dispatch, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AnyAction } from 'redux'

import { Reducer, selectBlock } from 'reducers'
import { INDEX, N } from 'typings'
import { Container } from './styles'

interface Props {
  colIndex: INDEX
  rowIndex: INDEX
}

interface State {
  isActive: boolean
  isPuzzle: boolean
  value: N
}

const Block: FC<Props> = ({ colIndex, rowIndex }) => {
  const state = useSelector<Reducer, State>(({ puzzleGrid, selectedBlock, workingGrid }) => ({
    isActive: selectedBlock
      ? selectedBlock[0] === rowIndex && selectedBlock[1] === colIndex
      : false,
    isPuzzle: puzzleGrid ? puzzleGrid[rowIndex][colIndex] !== 0 : false,
    value: workingGrid ? workingGrid[rowIndex][colIndex] : 0,
  }))

  const dispatch = useDispatch<Dispatch<AnyAction>>()

  const handleClick = () => {
    if (!state.isActive && !state.isPuzzle) dispatch(selectBlock([rowIndex, colIndex]))
  }

  return (
    <Container
      active={state.isActive}
      data-cy={`block-${rowIndex}-${colIndex}`}
      onClick={handleClick}
      puzzle={state.isPuzzle}
    >
      {state.value || ''}
    </Container>
  )
}

export default Block
