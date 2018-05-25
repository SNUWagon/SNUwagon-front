import React from 'react'
import { shallow } from 'enzyme'
import PostListElement from '.'

const wrap = (props = {}) => shallow(<PostListElement {...props} />)

describe('PostListElement', () => {
  it('renders with question type', () => {
    const props = {
      onClick: jest.fn(),
      type: 'question',
      title: 'title',
      due: '2018-01-01',
      tags: ['tag'],
      rightIcon: (<div />),
    }

    wrap(props)
  })

  it('renders with information type', () => {
    const props = {
      onClick: jest.fn(),
      type: 'information',
      title: 'title',
      due: '2018-01-01',
      tags: ['tag'],
      rightIcon: (<div />),
    }

    wrap(props)
  })
})

