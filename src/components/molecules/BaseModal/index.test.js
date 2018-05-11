import React from 'react'
import { shallow } from 'enzyme'
import BaseModal from '.'

const wrap = (props = {}) => shallow(<BaseModal {...props} />).dive()

it('renders', () => {
  wrap()
})

it('handle click button', () => {
  const props = {
    onClose: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.modal-button').simulate('click')
  expect(props.onClose).toHaveBeenCalled()
})
