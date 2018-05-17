import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import CustomDatePicker from '.'

const wrap = (props = {}) => shallow(<CustomDatePicker {...props} />)

const mockStore = configureStore([])


it('renders', () => {
  const initialState = {
    due: null,
  }
  const store = mockStore(initialState)
  const props = {
    store,
    due: '0001-01-01T09:29:00+08:28',
  }
  wrap(props)
})

it('calls handleChange on change', () => {
  const initialState = {
    due: null,
  }
  const store = mockStore(initialState)
  const props = {
    store,
    due: '0001-01-01T09:29:00+08:28',
    onChange: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.due-input').simulate('change', ('event', { date: '0001-01-02T09:29:00+08:28' }))
  expect(props.onChange).toHaveBeenCalled()
})
