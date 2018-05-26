import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { TitleBarShallow, mapStateToProps, mapDispatchToProps } from '.'
import * as actions from '../../../store/user/actions'

const wrap = (props = {}) => shallow(<TitleBarShallow {...props} />)
const mockStore = configureStore([])

describe('TitleBar', () => {
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

  it('proper state is set', () => {
    expect(Object.keys(mapStateToProps({ user: {} }))).toEqual(expect.arrayContaining(['logged', 'profile']))
  })

  it('proper dispatch is set', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onClickTitle()
    expect(dispatch.mock.calls[0][0]).toEqual(expect.objectContaining({ type: actions.CHANGE_ROUTE }))
    mapDispatchToProps(dispatch).onClickSignIn()
    expect(dispatch.mock.calls[1][0]).toEqual(expect.objectContaining({ type: actions.CHANGE_ROUTE }))
    mapDispatchToProps(dispatch).onClickSignOut()
    expect(dispatch.mock.calls[2][0]).toEqual(expect.objectContaining({ type: actions.SIGN_OUT }))
    mapDispatchToProps(dispatch).loadProfile()
    expect(dispatch.mock.calls[3][0]).toEqual(expect.objectContaining({ type: actions.GET_USER_PROFILE }))
  })
})
