import React from 'react'
import { shallow } from 'enzyme'
import AuthContainer from '.'

const wrap = (props = {}) => shallow(<AuthContainer {...props} />).dive()

it('renders with children', () => {
  wrap({ children: <p>content</p> })
})
