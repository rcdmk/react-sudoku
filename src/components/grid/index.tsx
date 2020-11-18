import React, { Children, FC } from 'react'

import { Container, Row } from './styles'

const Grid: FC = () => {
  return (
    <Container data-cy="grid-container">
      {Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row data-cy="grid-row-container">
            {Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <div data-cy="block">{colIndex + 1}</div>
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  )
}

export default Grid
