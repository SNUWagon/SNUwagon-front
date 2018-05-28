import * as actions from './actions'
import answerReducer from './reducer'
import { initialState } from './selectors'

describe('answer reducer', () => {
  it('should return the initial state', () => {
    expect(answerReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle update question answer', () => {
    const answerList = [{
      id: 1,
      content: 'answer',
      author: 'user',
    }]
    expect(answerReducer({}, actions.updateQuestionAnswer(answerList)))
      .toEqual(answerList)
  })
})
