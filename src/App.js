import React from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { palette } from 'theme'
import { Board } from 'board'

export const App = () => {

  return (
      <MuiThemeProvider theme={palette}>
        <Board />
      </MuiThemeProvider>
  )
}
