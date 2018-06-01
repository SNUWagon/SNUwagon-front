import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import CustomDatePicker from '.'

const wrap = (props = {}) => shallow(<CustomDatePicker {...props} />)

const mockStore = configureStore([])
const initialState = {
  dueDate: null,
  dueTime: null,
}
const store = mockStore(initialState)

it('renders', () => {
  const props = {
    store,
    state: {
      dueDate: '0001-01-01T09:29:00+08:28',
      dueTime: '0001-01-01T09:29:00+08:28',
    },
  }
  wrap(props)
})

it('calls onChange, selecting date then time', () => {
  const props = {
    store,
    state: {
      dueDate: '2018-01-02T09:29:00+08:28',
      dueTime: '2018-01-02T09:29:00+08:28',
    },
    newDate: undefined,
    onChange: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.due-date-input').simulate('change', 'event', new Date('2018-01-02T09:29:00+08:28'))
  expect(props.onChange).not.toHaveBeenCalled()
  wrapper.find('.due-time-input').simulate('change', 'event', new Date('0001-01-02T09:29:00+08:28'))
  expect(props.onChange).toHaveBeenCalled()
})

it('calls onChange, changing time then date', () => {
  const props = {
    store,
    state: {
      dueDate: '2018-01-02T09:29:00+08:28',
      dueTime: '2018-01-02T09:29:00+08:28',
    },
    newDate: undefined,
    onChange: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.due-time-input').simulate('change', 'event', new Date('2018-01-02T09:29:00+08:28'))
  expect(props.onChange).not.toHaveBeenCalled()
  wrapper.find('.due-date-input').simulate('change', 'event', new Date('0001-01-02T09:29:00+08:28'))
  expect(props.onChange).toHaveBeenCalled()
})
