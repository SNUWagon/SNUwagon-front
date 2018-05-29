import React from 'react'
import { mapStateToProps, mapDispatchToProps } from './QuestionWrite'

const initialState = {
  question: undefined,
}

describe('QuestionWriteContainer', () => {
  it('mapStateToProps', () => {
    expect(mapStateToProps(initialState).question).toEqual(undefined)
  })

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onClickWriteQuestion()
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'WRITE_QUESTION_POST' })
    mapDispatchToProps(dispatch).onClickBack()
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'CHANGE_ROUTE' })
  })
})
