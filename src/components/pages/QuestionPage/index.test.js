import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import QuestionPage from '.'

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
  shallow(<QuestionPage store={store} />)
})
