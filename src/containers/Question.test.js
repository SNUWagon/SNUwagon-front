import React from 'react'
import { Question } from 'containers'
import { mapStateToProps, mapDispatchToProps } from 'containers/Question'

const initialState = {
  user: undefined,
  question: undefined,
  questionId: undefined,
}

describe('QuestionContainer', () => {
  it('mapStateToProps', () => {
    const ownProps = {
      id: 1,
    }
    expect(mapStateToProps(initialState, ownProps).user).toEqual(undefined)
    expect(mapStateToProps(initialState, ownProps).question).toEqual(undefined)
    expect(mapStateToProps(initialState, ownProps).questionId).toEqual(ownProps.id)
  })

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onClickAnswer()
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'CHANGE_ROUTE' })
    mapDispatchToProps(dispatch).onClickDelete()
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'DELETE_QUESTION_POST' })
  })
})
