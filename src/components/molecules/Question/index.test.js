import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import Question from '.'

const wrap = (props = {}) => shallow(<Question {...props} />)

const mockStore = configureStore([])

it('renders', () => {
  const initialState = {
    user: {
      login: false,
      profile: {
        userId: undefined,
        username: undefined,
        credit: undefined,
      },
    },
    question: {
      postId: undefined,
      title: undefined,
      content: undefined,
      due: undefined,
      bounty: undefined,
      author: undefined,
      resolved: undefined,
      selected: undefined,
      tags: undefined,
    },
  }
  const store = mockStore(initialState)

  const props = {
    store,
    user: {
      login: true,
      profile: {
        userId: 1,
        username: 'user',
        credit: 1,
      },
    },
    question: {
      postId: 1,
      title: 'title',
      content: 'content',
      due: '0001-01-01T01:01:00Z',
      bounty: 1,
      author: 'user',
      resolved: false,
      selected: 2,
      tags: 'tags',
    },
    onClickDelete: jest.fn(),
    onClickAnswer: jest.fn(),
  }
  wrap(props)
})

it('handles click delete button for author\'s question', () => {
  const initialState = {
    user: {
      login: false,
      profile: {
        userId: undefined,
        username: undefined,
        credit: undefined,
      },
    },
    question: {
      postId: undefined,
      title: undefined,
      content: undefined,
      due: undefined,
      bounty: undefined,
      author: undefined,
      resolved: undefined,
      selected: undefined,
      tags: undefined,
    },
  }
  const store = mockStore(initialState)
  const props = {
    store,
    user: {
      login: true,
      profile: {
        userId: 1,
        username: 'user',
        credit: 1,
      },
    },
    question: {
      postId: 1,
      title: 'title',
      content: 'content',
      due: '0001-01-01T01:01:00Z',
      bounty: 1,
      author: 'user',
      resolved: false,
      selected: 2,
      tags: 'tags',
    },
    onClickDelete: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.delete-button').simulate('click')
  expect(props.onClickDelete).toHaveBeenCalled()
})

it('handles click answer button for other person\'s question', () => {
  const initialState = {
    user: {
      login: false,
      profile: {
        userId: undefined,
        username: undefined,
        credit: undefined,
      },
    },
    question: {
      postId: undefined,
      title: undefined,
      content: undefined,
      due: undefined,
      bounty: undefined,
      author: undefined,
      resolved: undefined,
      selected: undefined,
      tags: undefined,
    },
  }
  const store = mockStore(initialState)
  const props = {
    store,
    user: {
      login: true,
      profile: {
        userId: 1,
        username: 'user',
        credit: 1,
      },
    },
    question: {
      postId: 1,
      title: 'title',
      content: 'content',
      due: '0001-01-01T01:01:00Z',
      bounty: 1,
      author: 'diffuser',
      resolved: false,
      selected: 2,
      tags: 'tags',
    },
    onClickAnswer: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.answer').simulate('change', { target: { value: 'answer' } })
  wrapper.find('.answer-button').simulate('click')
  expect(props.onClickAnswer).toHaveBeenCalled()
})

