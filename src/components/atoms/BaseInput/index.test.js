import React from 'react'
import { shallow } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Input from '.'

const wrap = (props = {}) => shallow(<MuiThemeProvider><Input {...props} /></MuiThemeProvider>).dive()

it('renders', () => {
  wrap()
})
