import React from 'react'
import { shallow } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import BaseSnackbar from '.'

const wrap = (props = {}) => shallow(<MuiThemeProvider><BaseSnackbar {...props} /></MuiThemeProvider>).dive()

it('renders', () => {
  wrap()
})
