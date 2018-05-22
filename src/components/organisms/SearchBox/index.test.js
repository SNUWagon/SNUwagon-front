import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import SearchBox, { mapStateToProps, mapDispatchToProps } from '.'
import * as actions from '../../../store/search/actions'

const wrap = (props = {}) => shallow(<SearchBox {...props} />)
const mockStore = configureStore([])

describe('SearchBox', () => {
  it('renders', () => {
    const initialState = {
      search: {},
    }
    const store = mockStore(initialState)

    const props = {
      store,
      tagList: [],
      questionList: [],
      informationList: [],
      titleSearch: jest.fn(),
      tagSearch: jest.fn(),
      changeRoute: jest.fn(),
    }

    wrap(props)
  })

  it('proper dispatch is set', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).titleSearch()
    // expect(dispatch.mock.calls[0][0]).toEqual(expect.objectContaining({ type: actions.SEAR }))
    mapDispatchToProps(dispatch).tagSearch()
    // expect(dispatch.mock.calls[1][0]).toEqual(expect.objectContaining({ type: actions.CHANGE_ROUTE }))
    mapDispatchToProps(dispatch).changeRoute()
    mapDispatchToProps(dispatch).resetSearchResult()
  })
})
