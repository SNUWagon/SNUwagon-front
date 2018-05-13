import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import PostListTable from '.'

const wrap = (props = {}) => shallow(<PostListTable {...props} />)

const mockStore = configureStore([])

it('renders', () => {
  const initialState = {

  }
  const store = mockStore(initialState)

  const props = {
    store,
    logged: false,
    changeRoute: jest.fn(),
  }
  wrap(props)
})
