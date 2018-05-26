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
      searched: jest.fn(),
    }
    const wrapper = wrap(props)
    wrapper.find('.search-input').props().onUpdateInput('asdf')
    wrapper.find('.search-button').simulate('click')
    expect(props.titleSearch).toHaveBeenCalled()
    expect(wrapper.find('.search-input').props().filter('asdf', 'asdf')).toBe(false)

    wrapper.find('.search-input').props().onUpdateInput('#asdf')
    wrapper.find('.search-button').simulate('click')
    expect(props.tagSearch).toHaveBeenCalled()
    expect(wrapper.find('.search-input').props().filter('asdf', 'asdf')).toBe(true)
  })
})
