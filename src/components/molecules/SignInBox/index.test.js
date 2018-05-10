import React from 'react'
import { shallow } from 'enzyme'
import SignInBox from '.'

const wrap = (props = {}) => shallow(<SignInBox {...props} />).dive()

it('renders', () => {
  wrap({
    onClickSignIn: () => {},
    onClickSignUp: () => {},
  })
})

it('handle click sign in button', () => {
  const props = {
    onClickSignIn: jest.fn(),
    onClickSignUp: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.username-input').simulate('change', { target: { value: 'user' } })
  wrapper.find('.password-input').simulate('change', { target: { value: 'pass' } })
  wrapper.find('.sign-in-button').simulate('click')
  expect(props.onClickSignIn).toHaveBeenCalled()
})

it('handle click sign up button', () => {
  const props = {
    onClickSignIn: jest.fn(),
    onClickSignUp: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.sign-up-button').simulate('click')
  expect(props.onClickSignUp).toHaveBeenCalled()
})
