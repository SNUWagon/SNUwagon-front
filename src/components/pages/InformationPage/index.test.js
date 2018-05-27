import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import InformationPage from '.'

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
  information: {
    postId: undefined,
    title: undefined,
    content: undefined,
    hiddenExist: undefined,
    hiddenContent: undefined,
    hiddenContentCost: undefined,
    hiddenBought: undefined,
    due: undefined,
    author: undefined,
    sponsorCredit: undefined,
    tags: undefined,
  },
}
const store = mockStore(initialState)

it('renders', () => {
  shallow(<InformationPage store={store} />)
})
