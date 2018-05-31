import React from 'react'
import { shallow } from 'enzyme'
import NewsfeedElement from '.'

const wrap = (props = {}) => shallow(<NewsfeedElement {...props} />)

describe('newsfeedelement', () => {
  it('renders', () => {
    const props = {
      onClose: jest.fn(),
      changeRoute: jest.fn(),
      message: 'asdf',
      type: 'asdf',
      contentId: 1,
    }

    const wrapper = wrap(props)
    wrapper.simulate('click')
  })

  it('calls method on NEW_ANSWER type', () => {
    const props = {
      onClose: jest.fn(),
      changeRoute: jest.fn(),
      message: 'asdf',
      type: 'NEW_ANSWER',
      contentId: 1,
    }

    const wrapper = wrap(props)
    wrapper.simulate('click')
    expect(props.changeRoute).toHaveBeenCalled()
  })

  it('calls method on INFORMATION_BOUGHT type', () => {
    const props = {
      onClose: jest.fn(),
      changeRoute: jest.fn(),
      message: 'asdf',
      type: 'INFORMATION_BOUGHT',
      contentId: 1,
    }

    const wrapper = wrap(props)
    wrapper.simulate('click')
    expect(props.changeRoute).toHaveBeenCalled()
  })
})
