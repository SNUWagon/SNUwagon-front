import React from 'react'
import { shallow } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import SignUpBox from '.'

const wrap = (props = {}) => shallow(<MuiThemeProvider><SignUpBox {...props} /></MuiThemeProvider>).dive()

it('renders', () => {
  wrap({
    onClickBack: () => {},
    onClickSignUp: () => {},
  })
})


it('handle click sign up button', () => {
  const props = {
    onClickSignUp: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.email-input').props().onChange({ target: undefined })
  wrapper.find('.email-input').simulate('change', { target: { value: 'email@gmail.ac.kr' } })
  wrapper.find('.username-input').simulate('change', { target: { value: 'user' } })
  wrapper.find('.password-input').simulate('change', { target: { value: 'pass' } })
  wrapper.find('.sign-up-button-disabled').simulate('click')
  expect(props.onClickSignUp).toHaveBeenCalled()
  wrapper.find('.email-input').simulate('change', { target: { value: 'email@snu.ac.kr' } })
  wrapper.find('.username-input').simulate('change', { target: { value: 'user' } })
  wrapper.find('.password-input').simulate('change', { target: { value: 'pass' } })
})

it('handle click back button', () => {
  const props = {
    onClickBack: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.back-button').simulate('click')
  expect(props.onClickBack).toHaveBeenCalled()
})
