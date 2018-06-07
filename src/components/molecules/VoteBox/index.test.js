import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import VoteBox from '.'

const wrap = (props = {}) => shallow(<VoteBox {...props} />)

describe('VoteBox', () => {
  it('renders', () => {
    const props = {
      onClickUpVote: jest.fn(),
      onClickDownVote: jest.fn(),
      upVoteValue: 1,
      downVoteValue: 1,
    }
    wrap(props)
  })
})
