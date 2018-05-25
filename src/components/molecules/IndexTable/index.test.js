import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import IndexTable from '.'

const wrap = (props = {}) => shallow(<IndexTable {...props} />)

describe('Index Buttons', () => {
  it('renders', () => {
    const props = {
      logged: false,
      questionList: [],
      informationList: [],
      onNotLoggedIn: jest.fn(),
      changeRoute: jest.fn(),
    }

    wrap(props)
  })

  it('renders question and information chips', () => {
    const props = {
      logged: false,
      questionList: [
        {
          id: 1,
          bounty: 1,
          title: 'title',
          tags: [],
        },
      ],
      informationList: [
        {
          id: 1,
          title: 'title',
          tags: [],
        },
      ],
      onNotLoggedIn: jest.fn(),
      changeRoute: jest.fn(),
    }

    const wrapper = wrap(props)
    expect(wrapper.find('.question-list-chip').exists()).toBe(true)
    expect(wrapper.find('.information-list-chip').exists()).toBe(true)
  })

  it('handles chip click on not logged in', () => {
    const props = {
      logged: false,
      questionList: [
        {
          id: 1,
          bounty: 1,
          title: 'title',
          tags: [],
        },
      ],
      informationList: [
        {
          id: 1,
          title: 'title',
          tags: [],
        },
      ],
      onNotLoggedIn: jest.fn(),
      changeRoute: jest.fn(),
    }

    const wrapper = wrap(props)
    wrapper.find('.question-list-chip').simulate('click')
    expect(props.onNotLoggedIn).toHaveBeenCalledTimes(1)
    wrapper.find('.information-list-chip').simulate('click')
    expect(props.onNotLoggedIn).toHaveBeenCalledTimes(2)
  })

  it('handles chip click on logged in', () => {
    const props = {
      logged: true,
      questionList: [
        {
          id: 1,
          bounty: 1,
          title: 'title',
          tags: [],
        },
      ],
      informationList: [
        {
          id: 1,
          title: 'title',
          tags: [],
        },
      ],
      onNotLoggedIn: jest.fn(),
      changeRoute: jest.fn(),
    }

    const wrapper = wrap(props)
    wrapper.find('.question-list-chip').simulate('click')
    expect(props.changeRoute).toHaveBeenCalledTimes(1)
    wrapper.find('.information-list-chip').simulate('click')
    expect(props.changeRoute).toHaveBeenCalledTimes(2)
  })
})
