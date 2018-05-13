import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import TitleBar from '.'

const wrap = (props = {}) => shallow(<TitleBar {...props} />)
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
    logged: false,
    profile: {
      username: '',
      userId: '',
      credit: 1,
    },
    onClickSignIn: jest.fn(),
    onClickSignOut: jest.fn(),
    onClickTitle: jest.fn(),
    loadProfile: jest.fn(),
  }
  wrap(props)
})
