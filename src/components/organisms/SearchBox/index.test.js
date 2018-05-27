import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import { SearchBoxShallow, mapStateToProps, mapDispatchToProps } from '.'
import * as actions from '../../../store/search/actions'

const wrap = (props = {}) => shallow(<SearchBoxShallow {...props} />)
const mockStore = configureStore([])

describe('SearchBox', () => {
  it('renders', () => {
    const initialState = {
      search: {},
    }
    const store = mockStore(initialState)

    const props = {
      store,
      tagList: ['tag'],
      questionList: [],
      informationList: [],
      titleSearch: jest.fn(),
      tagSearch: jest.fn(),
      changeRoute: jest.fn(),
    }

    const wrapper = wrap(props)
    wrapper.find('.search-input').props().searched()
    wrapper.find('.question-list-pagination').props().onChange()
    wrapper.find('.information-list-pagination').props().onChange()
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
