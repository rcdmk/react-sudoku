import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from 'styles'
import { Card, Content, Grid, Title } from 'components'
import { configureStore } from 'core'

const store = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <Content data-cy="content">
        <Title>Sudoku</Title>
        <Card data-cy="card">
          <Grid data-cy="grid" />
        </Card>
      </Content>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
