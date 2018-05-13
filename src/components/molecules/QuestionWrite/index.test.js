import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import QuestionWrite from '.'

const wrap = (props = {}) => shallow(<QuestionWrite {...props} />)
const mockStore = configureStore([])

it('renders', () => {
  wrap({
    onClickWriteQuestion: () => {},
    onClickBack: () => {},
  })
})

it('handles click submit question button', () => {
  const initialState = {
    user: {
      login: true,
      profile: {
        username: 'user',
        userId: 1,
        credit: 1,
      },
    },
  }
  const store = mockStore(initialState)
  const props = {
    store,
    state: {
      user: {
        login: true,
        profile: {
          username: 'user',
          userId: 1,
          credit: 1,
        },
      },
    },
    onClickWriteQuestion: jest.fn(),
  }
  const wrapper = wrap(props)

  wrapper.find('.title-input').simulate('change', { target: { value: 'title' } })
  wrapper.find('.content-input').simulate('change', { target: { value: 'content' } })
  wrapper.find('.due-input').simulate('change', { target: { value: '0001-01-01T01:01:00Z' } })
  wrapper.find('.bounty-input').simulate('change', { target: { value: 1 } })
  wrapper.find('.write-question-button').simulate('click')
  expect(props.onClickWriteQuestion).toHaveBeenCalled()
})

it('handles click back button', () => {
  const props = {
    onClickBack: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.back-button').simulate('click')
  expect(props.onClickBack).toHaveBeenCalled()
})
