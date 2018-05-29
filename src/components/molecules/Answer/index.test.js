import React from 'react'
import { shallow, render } from 'enzyme'
import configureStore from 'redux-mock-store'
import { AnswerShallow, mapStateToProps, mapDispatchToProps } from '.'

const wrap = (props = {}) => shallow(<AnswerShallow {...props} />)
const mockStore = configureStore([])

const initialState = {
  username: undefined,
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
  answer: {
    id: undefined,
    content: undefined,
    author: undefined,
  },
}
const store = mockStore(initialState)

describe('Answer', () => {
  it('renders', () => {
    const props = {
      store,
      username: 'user',
      question: {
        postId: 1,
        title: 'title',
        content: 'content',
        due: '0001-01-01T01:01:00Z',
        bounty: 1,
        author: 'user',
        resolved: false,
        selected: undefined,
        tags: 'tags',
      },
      answer: {
        id: 1,
        content: 'answer',
        author: 'aaa',
      },
      onClickSelect: jest.fn(),
    }
    wrap(props)
  })

  it('handles click select button', () => {
    const props = {
      store,
      username: 'author',
      question: {
        postId: 1,
        title: 'title',
        content: 'content',
        due: '0001-01-01T01:01:00Z',
        bounty: 1,
        author: 'author',
        resolved: false,
        selected: undefined,
        tags: 'tags',
      },
      answer: {
        id: 1,
        content: 'answer',
        author: 'aaa',
      },
      onClickSelect: jest.fn(),
    }
    const wrapper = wrap(props)
    // expect(wrapper.find('.select-button').exists()).toEqual(true)
    wrapper.find('.select-button').simulate('click')
    expect(props.onClickSelect).toHaveBeenCalled()
  })

  it('does not render select button if not owner', () => {
    const props = {
      store,
      username: 'user',
      question: {
        postId: 1,
        title: 'title',
        content: 'content',
        due: '0001-01-01T01:01:00Z',
        bounty: 1,
        author: 'author',
        resolved: false,
        selected: undefined,
        tags: 'tags',
      },
      answer: {
        id: 1,
        content: 'answer',
        author: 'aaa',
      },
      onClickSelect: jest.fn(),
    }
    const wrapper = wrap(props)
    expect(wrapper.find('.select-button').exists()).toEqual(false)
  })

  it('does not render select button if resolved', () => {
    const props = {
      store,
      username: 'user',
      question: {
        postId: 1,
        title: 'title',
        content: 'content',
        due: '0001-01-01T01:01:00Z',
        bounty: 1,
        author: 'user',
        resolved: true,
        selected: 2,
        tags: 'tags',
      },
      answer: {
        id: 1,
        content: 'answer',
        author: 'aaa',
      },
      onClickSelect: jest.fn(),
    }
    const wrapper = wrap(props)
    expect(wrapper.find('.select-button').exists()).toEqual(false)
  })

  it('mapStateToProps', () => {
    expect(mapStateToProps()).toEqual({})
  })

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onClickSelect()
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SELECT_QUESTION_ANSWER' })
  })
})
