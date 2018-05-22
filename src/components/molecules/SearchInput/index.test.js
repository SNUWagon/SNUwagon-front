import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import SearchInput from '.'

const wrap = (props = {}) => shallow(<SearchInput {...props} />)

describe('SearchInput', () => {
  it('renders', () => {
    wrap()
  })

  it('handle search input changing', () => {
    const props = {
      titleSearch: jest.fn(),
      tagSearch: jest.fn(),
      tagList: [],
    }
    const wrapper = wrap(props)
    wrapper.find('.search-input').simulate('change', { searchText: 'test' })
    wrapper.find('.search-button').simulate('click')
    // expect(props.titleSearch).toHaveBeenCalled()
  })
})
