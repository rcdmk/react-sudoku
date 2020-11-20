import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Card, Content, Grid, Title } from 'components'
import { GlobalStyles, theme } from 'styles'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Content data-cy="content">
      <Title>Sudoku</Title>
      <Card data-cy="card">
        <Grid data-cy="grid" />
      </Card>
    </Content>
  </ThemeProvider>,
  document.getElementById('root')
)
