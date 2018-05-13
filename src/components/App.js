import React, { PropTypes } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import theme from './themes/default'

injectGlobal`
  body {
    margin: 0;
  }
`

const App = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiThemeProvider>
        {children}
      </MuiThemeProvider>
    </ThemeProvider>
  )
}

App.propTypes = {
  children: PropTypes.any,
}

export default App
