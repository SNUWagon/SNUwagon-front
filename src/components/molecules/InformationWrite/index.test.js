import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import InformationWrite from '.'

const wrap = (props = {}) => shallow(<InformationWrite {...props} />)
const mockStore = configureStore([])
const initialState = {
  user: {
    login: true,
    profile: {
      username: 'user',
      userId: 1,
      credit: 10,
    },
  },
}
const store = mockStore(initialState)

it('renders', () => {
  wrap({
    onClickWriteInformation: () => {},
    onClickBack: () => {},
    state: {
      search: {
        tagList: ['tag1', 'tag2'],
      },
    },
  })
})

it('handles click submit information button with hidden contents', () => {
  const props = {
    store,
    state: {
      user: {
        login: true,
        profile: {
          username: 'user',
          userId: 1,
          credit: 10,
        },
      },
      search: {
        tagList: ['tag1', 'tag2'],
      },
    },
    onClickWriteInformation: jest.fn(),
  }
  const wrapper = wrap(props)

  wrapper.find('.title-input').simulate('change', { target: { value: 'title' } })
  wrapper.find('.content-input').simulate('change', { target: { value: 'content' } })
  wrapper.find('.hidden-content-button').simulate('click')
  wrapper.find('.hidden-content-input').simulate('change', { target: { value: 'hidden' } })
  wrapper.find('.hidden-content-cost-input').simulate('change', { target: { value: 1 } })
  wrapper.find('.due-input').simulate('change', { date: '0001-01-01T01:01:00Z' })
  wrapper.find('.write-information-button').simulate('click')
  expect(props.onClickWriteInformation).toHaveBeenCalled()
})

it('handles click submit information button without hidden contents', () => {
  const props = {
    store,
    state: {
      user: {
        login: true,
        profile: {
          username: 'user',
          userId: 1,
          credit: 10,
        },
      },
      search: {
        tagList: ['tag1', 'tag2'],
      },
    },
    onClickWriteInformation: jest.fn(),
  }
  const wrapper = wrap(props)

  wrapper.find('.title-input').simulate('change', { target: { value: 'title' } })
  wrapper.find('.content-input').simulate('change', { target: { value: 'content' } })
  wrapper.find('.due-input').simulate('change', { date: '0001-01-01T01:01:00Z' })
  wrapper.find('.sponsor-credit-input').simulate('change', { target: { value: 1 } })
  wrapper.find('.write-information-button').simulate('click')
  expect(props.onClickWriteInformation).toHaveBeenCalled()
})

it('handles click submit information button without sponsor credit', () => {
  const props = {
    store,
    state: {
      user: {
        login: true,
        profile: {
          username: 'user',
          userId: 1,
          credit: 10,
        },
      },
      search: {
        tagList: ['tag1', 'tag2'],
      },
    },
    onClickWriteInformation: jest.fn(),
  }
  const wrapper = wrap(props)

  wrapper.find('.title-input').simulate('change', { target: { value: 'title' } })
  wrapper.find('.content-input').simulate('change', { target: { value: 'content' } })
  wrapper.find('.due-input').simulate('change', { date: '0001-01-01T01:01:00Z' })
  wrapper.find('.write-information-button').simulate('click')
  expect(props.onClickWriteInformation).toHaveBeenCalled()
})

it('handles click submit information button with tags', () => {
  const props = {
    store,
    state: {
      user: {
        login: true,
        profile: {
          username: 'user',
          userId: 1,
          credit: 10,
        },
      },
      search: {
        tagList: ['tag1', 'tag2'],
      },
    },
    onClickWriteInformation: jest.fn(),
  }
  const wrapper = wrap(props)

  wrapper.find('.title-input').simulate('change', { target: { value: 'title' } })
  wrapper.find('.content-input').simulate('change', { target: { value: 'content' } })
  wrapper.find('.due-input').simulate('change', { date: '0001-01-01T01:01:00Z' })
  wrapper.find('.tag-input').simulate('update', { tag: ['t1', 't2'] })
  wrapper.find('.write-information-button').simulate('click')
  expect(props.onClickWriteInformation).toHaveBeenCalled()
})

it('does not write information without all mandatory fields filled', () => {
  const props = {
    store,
    state: {
      user: {
        login: true,
        profile: {
          username: 'user',
          userId: 1,
          credit: 10,
        },
      },
      search: {
        tagList: ['tag1', 'tag2'],
      },
    },
    onClickWriteInformation: jest.fn(),
  }
  const wrapper = wrap(props)

  wrapper.find('.title-input').simulate('change', { target: { value: 'title' } })
  wrapper.find('.due-input').simulate('change', { date: '0001-01-01T01:01:00Z' })
  wrapper.find('.write-information-button').simulate('click')
  expect(props.onClickWriteInformation).not.toHaveBeenCalled()
})

it('handles click back button', () => {
  const props = {
    onClickBack: jest.fn(),
    state: {
      search: {
        tagList: ['tag1', 'tag2'],
      },
    },
  }
  const wrapper = wrap(props)
  wrapper.find('.back-button').simulate('click')
  expect(props.onClickBack).toHaveBeenCalled()
})
