import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import PostList from '.'

const wrap = (props = {}) => shallow(<PostList {...props} />)

describe('PostList', () => {
  it('renders with question type', () => {
    const props = {
      postList: [{}],
      type: 'question',
      changeRoute: jest.fn(),
    }

    wrap(props)
  })

  it('renders in information type', () => {
    const props = {
      postList: [{}],
      type: 'information',
      changeRoute: jest.fn(),
    }

    wrap(props)
  })

  it('on element click in question type', () => {
    const props = {
      postList: [{
        title: 'title',
        id: '1',
        due: '2018-01-01',
        tags: [],
      }],
      type: 'question',
      changeRoute: jest.fn(),
    }

    const wrapper = wrap(props)
    wrapper.find('.post-list-element').simulate('click')
    expect(props.changeRoute).toHaveBeenCalled()
  })

  it('on element click in information type', () => {
    const props = {
      postList: [{
        title: 'title',
        id: '1',
        due: '2018-01-01',
        tags: [],
      }],
      type: 'information',
      changeRoute: jest.fn(),
    }

    const wrapper = wrap(props)
    wrapper.find('.post-list-element').simulate('click')
    expect(props.changeRoute).toHaveBeenCalled()
  })
})

