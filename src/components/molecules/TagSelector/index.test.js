import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import TagSelector from '.'

const wrap = (props = {}) => shallow(<TagSelector {...props} />)

describe('TagSelector', () => {
  it('renders', () => {
    const props = {
      tagList: [],
      onUpdate: jest.fn,
    }
    wrap(props)
  })

  it('handle changing input of auto complete', () => {
    const props = {
      tagList: [],
      onUpdate: jest.fn,
    }

    const wrapper = wrap(props)
    wrapper.find('.tag-input').props().onUpdateInput('tag')
    wrapper.find('.tag-input').props().onUpdateInput('tag2 ')
    wrapper.find('.tag-input').props().onUpdateInput('#tag3 ')
    wrapper.find('.tag-input').props().onUpdateInput('#tag4 ')
    wrapper.find('.tag-input').props().onUpdateInput('#tag4 ')
    wrapper.find('.tag-input').props().onUpdateInput('# ')
    wrapper.find('.tag-input').props().onNewRequest()
    wrapper.find('.tag-chip').at(0).props().onRequestDelete()
  })
})
