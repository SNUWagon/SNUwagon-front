import React from 'react'
import { shallow } from 'enzyme'
import PostListCell from '.'

const wrap = (props = {}) => shallow(<PostListCell {...props} />)

it('renders', () => {
  const props = {
    onClick: jest.fn(),
    type: 'question',
    title: 'title',
    created: '',
    due: '',
  }

  wrap(props)
})

