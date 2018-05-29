import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { QuestionPageShallow, mapStateToProps, mapDispatchToProps } from '.'

const wrap = (props = {}) => shallow(<QuestionPageShallow {...props} />)

const mockStore = configureStore([])
const initialState = {
  user: {
    login: true,
    profile: {
      userId: 1,
      username: 'user',
      credit: 100,
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

describe('QuestionPage', () => {
  it('renders', () => {
    const props = {
      store,
      initialState,
      params: {
        id: 1,
      },
      loadQuestion: jest.fn(),
      loadAnswer: jest.fn(),
    }
    const wrapper = wrap(props)
  })

  // it('loads questions when mounted', () => {
  //   const props = {
  //     store,
  //     params: {
  //       id: 1,
  //     },
  //     loadQuestion: jest.fn(),
  //   }
  //   // const spy = jest.spyOn(QuestionPage.prototype, 'loadQuestion')
  //   const wrapper = mount(<QuestionPage {...props} />)
  //   expect(props.loadQuestion).toHaveBeenCalledWith(props.params.id)
  // })

  it('mapStateToProps', () => {
    expect(mapStateToProps(initialState)).toEqual({
      logged: true,
      profile: {
        userId: 1,
        username: 'user',
        credit: 100,
      },
    })
  })

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    const postId = 1
    mapDispatchToProps(dispatch).loadQuestion(postId)
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'GET_QUESTION_POST', postId: 1 })
    mapDispatchToProps(dispatch).loadAnswer(postId)
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'GET_QUESTION_ANSWER', postId: 1 })
  })
})
