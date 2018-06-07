import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { QuestionWriteShallow, mapStateToProps, mapDispatchToProps } from '.'

const wrap = (props = {}) => shallow(<QuestionWriteShallow {...props} />)
const mockStore = configureStore([])
const initialState = {
  user: {
    login: true,
    profile: {
      username: 'user',
      userId: 1,
      credit: 1,
    },
  },
  search: {
    tagList: [],
  },
}
const store = mockStore(initialState)

it('renders', () => {
  wrap({
    state: {
      search: {
        tagList: [],
      },
    },
    onClickWriteQuestion: () => {},
    onClickBack: () => {},
  })
})

it('handles click submit question button', () => {
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
      search: {
        tagList: [],
      },
    },
    onClickWriteQuestion: jest.fn(),
  }
  const wrapper = wrap(props)

  wrapper.find('.title-input').simulate('change', { target: { value: 'title' } })
  wrapper.find('.content-input').simulate('change', { target: { value: 'content' } })
  wrapper.find('.due-input').simulate('change', { date: '0001-01-01T01:01:00Z' })
  wrapper.find('.bounty-input').simulate('change', { target: { value: 1 } })
  wrapper.find('.write-question-button').simulate('click')
  expect(props.onClickWriteQuestion).toHaveBeenCalled()
})

it('handles click submit question button with tags', () => {
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
      search: {
        tagList: [],
      },
    },
    onClickWriteQuestion: jest.fn(),
  }
  const wrapper = wrap(props)

  wrapper.find('.title-input').simulate('change', { target: { value: 'title' } })
  wrapper.find('.content-input').simulate('change', { target: { value: 'content' } })
  wrapper.find('.due-input').simulate('change', { date: '0001-01-01T01:01:00Z' })
  wrapper.find('.bounty-input').simulate('change', { target: { value: 1 } })
  wrapper.find('.write-question-button').simulate('click')
  wrapper.find('.tag-input').simulate('update', { tag: ['tag1', 'tag2'] })
  expect(props.onClickWriteQuestion).toHaveBeenCalled()
})

it('does not handle submit question button if not all required fields are filled', () => {
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
      search: {
        tagList: [],
      },
    },
    onClickWriteQuestion: jest.fn(),
    showFailModal: jest.fn(),
  }
  const wrapper = wrap(props)

  wrapper.find('.title-input').simulate('change', { target: { value: 'title' } })
  wrapper.find('.content-input').simulate('change', { target: { value: 'content' } })
  wrapper.find('.due-input').simulate('change', { date: '0001-01-01T01:01:00Z' })
  wrapper.find('.write-question-button').simulate('click')
  expect(props.onClickWriteQuestion).not.toHaveBeenCalled()
  expect(props.showFailModal).toHaveBeenCalled()
})

it('handles click back button', () => {
  const props = {
    state: {
      search: {
        tagList: [],
      },
    },
    onClickBack: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.back-button').simulate('click')
  expect(props.onClickBack).toHaveBeenCalled()
})

it('mapStateToProps', () => {
  expect(mapStateToProps()).toEqual({})
})

it('mapDispatchToProps', () => {
  const dispatch = jest.fn()
  mapDispatchToProps(dispatch).showFailModal()
  expect(dispatch.mock.calls[0][0]).toEqual({ type: 'UPDATE_MODAL', modalState: true, content: 'Please fill in all required fields.' })
})
