import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import IndexBox, { mapDispatchToProps, mapStateToProps } from '.'
import * as userActions from '../../../store/user/actions'
import * as displayActions from '../../../store/display/actions'
import * as listActions from '../../../store/list/actions'
import * as searchActions from '../../../store/search/actions'

const wrap = (props = {}) => shallow(<IndexBox {...props} />)

const mockStore = configureStore([])

describe('IndexBox', () => {
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
      list: {
        questionList: [],
        informationList: [],
      },
    }
    const store = mockStore(initialState)

    const props = {
      store,
      loadPostList: jest.fn(),
      changeRoute: jest.fn(),
      openModal: jest.fn(),
    }
    wrap(props)
  })

  it('proper state is set', () => {
    expect(Object.keys(mapStateToProps({ user: {}, list: {} })))
      .toEqual(expect.arrayContaining(['logged', 'questionList', 'informationList']))
  })

  it('proper dispatch is set', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).changeRoute()
    expect(dispatch.mock.calls[0][0]).toEqual(expect.objectContaining({ type: userActions.CHANGE_ROUTE }))
    mapDispatchToProps(dispatch).openModal()
    expect(dispatch.mock.calls[1][0]).toEqual(expect.objectContaining({ type: displayActions.UPDATE_MODAL }))
    mapDispatchToProps(dispatch).loadPostList()
    expect(dispatch.mock.calls[2][0]).toEqual(expect.objectContaining({ type: listActions.GET_QUESTION_LIST }))
    expect(dispatch.mock.calls[3][0]).toEqual(expect.objectContaining({ type: listActions.GET_INFORMATION_LIST }))
    mapDispatchToProps(dispatch).loadTagList()
    expect(dispatch.mock.calls[4][0]).toEqual(expect.objectContaining({ type: searchActions.GET_TAG_LIST }))
  })
})

