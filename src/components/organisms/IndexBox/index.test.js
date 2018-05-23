import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import IndexBox from '.'

const wrap = (props = {}) => shallow(<IndexBox {...props} />)

const mockStore = configureStore([])

it('renders', () => {
  const initialState = {
    user: {
      login: false,
      profile: {
        username: '',
        userId: '',
        credit: 1,
      },
    },
  }
  const store = mockStore(initialState)

  const props = {
    store,
    postList: [],
    loadPostList: jest.fn(),
    changeRoute: jest.fn(),
  }
  wrap(props)
})
