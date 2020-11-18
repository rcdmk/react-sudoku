import React, { FC } from 'react'

interface Props {
  colIndex: number
  rowIndex: number
}

const Block: FC<Props> = ({ colIndex, rowIndex }) => {
  return (
    <div data-cy="block">
      | {rowIndex} {colIndex} |
    </div>
  )
}

export default Block
