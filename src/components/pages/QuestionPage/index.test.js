import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import QuestionPage from '.'

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

it('renders', () => {
  shallow(<QuestionPage store={store} />)
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
