import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import IndexButtons from '.'

const wrap = (props = {}) => shallow(<IndexButtons {...props} />)

describe('Index Buttons', () => {
  it('renders', () => {
    wrap()
  })

  it('handle button click on not logged in', () => {
    const props = {
      logged: false,
      onNotLoggedIn: jest.fn(),
      changeRoute: jest.fn(),
    }
    const wrapper = wrap(props)
    wrapper.find('.question-write-button').simulate('click')
    expect(props.onNotLoggedIn).toHaveBeenCalledTimes(1)
    wrapper.find('.information-write-button').simulate('click')
    expect(props.onNotLoggedIn).toHaveBeenCalledTimes(2)
  })

  it('handle button click on logged in', () => {
    const props = {
      logged: true,
      onNotLoggedIn: jest.fn(),
      changeRoute: jest.fn(),
    }
    const wrapper = wrap(props)
    wrapper.find('.question-write-button').simulate('click')
    expect(props.changeRoute).toHaveBeenCalledTimes(1)
    wrapper.find('.information-write-button').simulate('click')
    expect(props.changeRoute).toHaveBeenCalledTimes(2)
    wrapper.find('.post-list-button').simulate('click')
    expect(props.changeRoute).toHaveBeenCalledTimes(3)
    wrapper.find('.search-button').simulate('click')
    expect(props.changeRoute).toHaveBeenCalledTimes(4)
  })
})
