import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import Information from '.'

const wrap = (props = {}) => shallow(<Information {...props} />)

const mockStore = configureStore([])

it('renders', () => {
  const initialState = {
    user: {
      login: false,
      profile: {
        userId: undefined,
        username: undefined,
        credit: undefined,
      },
    },
    information: {
      postId: undefined,
      title: undefined,
      content: undefined,
      hiddenExist: undefined,
      hiddenContent: undefined,
      hiddenContentCost: undefined,
      hiddenBought: undefined,
      due: undefined,
      author: undefined,
      sponsorCredit: undefined,
      tags: undefined,
      vote: {
        upVote: undefined,
        downVote: undefined,
      },
    },
  }
  const store = mockStore(initialState)

  const props = {
    store,
    user: {
      login: true,
      profile: {
        userId: 1,
        username: 'user',
        credit: 1,
      },
    },
    information: {
      postId: 1,
      title: 'title',
      content: 'content',
      hiddenExist: true,
      hiddenContent: 'hidden',
      hiddenContentCost: 10,
      hiddenBought: false,
      due: '0001-01-01T01:01:00Z',
      author: 'user',
      sponsorCredit: 5,
      tags: ['tag1', 'tag2'],
      vote: {
        upVote: 1,
        downVote: 1,
      },
    },
    // onClickPurchase: jest.fn(),
  }
  wrap(props)
})

it('handles click purchase button for unbought question', () => {
  const initialState = {
    user: {
      login: false,
      profile: {
        userId: undefined,
        username: undefined,
        credit: undefined,
      },
    },
    information: {
      postId: undefined,
      title: undefined,
      content: undefined,
      hiddenExist: undefined,
      hiddenContent: undefined,
      hiddenContentCost: undefined,
      hiddenBought: undefined,
      due: undefined,
      author: undefined,
      sponsorCredit: undefined,
      tags: undefined,
      vote: {
        upVote: 1,
        downVote: 1,
      },
    },
  }
  const store = mockStore(initialState)
  const props = {
    store,
    user: {
      login: true,
      profile: {
        userId: 1,
        username: 'user',
        credit: 1,
      },
    },
    information: {
      postId: 1,
      title: 'title',
      content: 'content',
      hiddenExist: true,
      hiddenContent: 'hidden',
      hiddenContentCost: 10,
      hiddenBought: false,
      due: '0001-01-01T01:01:00Z',
      author: 'notuser',
      sponsorCredit: 5,
      tags: ['tag1', 'tag2'],
      vote: {
        upVote: 1,
        downVote: 1,
      },
    },
    onClickPurchase: jest.fn(),
    postVote: jest.fn(),
  }
  const wrapper = wrap(props)
  wrapper.find('.purchase-button').simulate('click')
  wrapper.find('.vote-box').props().onClickUpVote()
  wrapper.find('.vote-box').props().onClickDownVote()
  expect(props.onClickPurchase).toHaveBeenCalled()
  expect(props.postVote).toHaveBeenCalled()
})
