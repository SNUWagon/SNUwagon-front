import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import WatchTagPickerDialog from '.'

const wrap = (props = {}) => shallow(<WatchTagPickerDialog {...props} />)

describe('WatchTagPickerDialog', () => {
  it('renders', () => {
    const props = {
      open: true,
      tagList: [],
      watchTagList: [],
      onClick: jest.fn(),
      onClose: jest.fn(),
    }

    wrap(props)
  })

  it('calls proper methods', () => {
    const props = {
      open: true,
      tagList: [],
      watchTagList: [],
      onClick: jest.fn(),
      onClose: jest.fn(),
    }

    const wrapper = wrap(props)
  })
})
