import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'

import { GlobalStyles, theme } from 'styles'
import { Card, Content, Grid, NewButton, Numbers, Title, Toast } from 'components'
import { configureStore } from 'core'

const { store, persistor } = configureStore()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Content data-cy="content">
          <Title>Sudoku</Title>
          <Card data-cy="card">
            <NewButton />
            <Grid data-cy="grid" />
            <Numbers />
          </Card>
        </Content>
        <Toast />
      </PersistGate>
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
