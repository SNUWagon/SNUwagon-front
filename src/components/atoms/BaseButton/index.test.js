import React from 'react'
import { shallow } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Button from '.'

const wrap = (props = {}) => shallow(<MuiThemeProvider><Button {...props} /></MuiThemeProvider>).dive()

it('renders', () => {
  wrap()
})
