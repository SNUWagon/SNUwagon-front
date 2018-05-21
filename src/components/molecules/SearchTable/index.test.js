import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import SearchTable from '.'

const wrap = (props = {}) => shallow(<SearchTable {...props} />)

describe('SearchTable', () => {
  it('renders', () => {
    const props = {
      postList: [],
      type: 'question',
      columns: ['test', 'test2'],
      changeRoute: jest.fn(),
    }
    wrap(props)
  })

  it('handle cell click', () => {
    const props = {
      postList: [{
        id: 1,
      }],
      type: 'question',
      columns: ['test', 'test2'],
      changeRoute: jest.fn(),
    }

    const wrapper = wrap(props)
    wrapper.find('.search-cell').simulate('click')
    expect(props.changeRoute).toHaveBeenCalled()
  })
})
