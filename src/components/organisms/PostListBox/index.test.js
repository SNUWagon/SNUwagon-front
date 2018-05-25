import React, { PropTypes } from 'react'
import { shallow, mount } from 'enzyme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from 'redux-mock-store'
import { PostListBoxShallow, mapStateToProps, mapDispatchToProps } from '.'
import * as listActions from '../../../store/list/actions'
import * as userActions from '../../../store/user/actions'

const wrap = (props = {}) => shallow(<PostListBoxShallow {...props} />)

const mockStore = configureStore([])

describe('PostListBox', () => {
  it('renders', () => {
    const initialState = {
      list: {
        questionList: [],
        informationList: [],
      },
    }

    const store = mockStore(initialState)

    const props = {
      store,
      questionList: [],
      informationList: [],
      changeRoute: jest.fn(),
      loadPostList: jest.fn(),
    }

    const wrapper = wrap(props)
  })

  it('proper state is set', () => {
    expect(Object.keys(mapStateToProps({ list: { questionList: [], informationList: [] } })))
      .toEqual(expect.arrayContaining(['questionList', 'informationList']))
  })

  it('proper dispatch is set', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).changeRoute()
    expect(dispatch.mock.calls[0][0]).toEqual(expect.objectContaining({ type: userActions.CHANGE_ROUTE }))
    mapDispatchToProps(dispatch).loadPostList()
    expect(dispatch.mock.calls[1][0]).toEqual(expect.objectContaining({ type: listActions.GET_QUESTION_LIST }))
  })
})
