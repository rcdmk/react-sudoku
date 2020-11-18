import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from './styles'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>Hello World!</div>
  </ThemeProvider>,
  document.getElementById('root')
)
