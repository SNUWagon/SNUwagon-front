import React from 'react'
import { shallow } from 'enzyme'
import LoadingModal from '.'

const wrap = (props = {}) => shallow(<LoadingModal {...props} />).dive()

describe('LoadingModal', () => {
  it('renders', () => {
    const props = {
      open: true,
    }
    wrap(props)
  })
})

