import * as actions from './actions'

describe('answer actions', () => {
  it('should create an action to get answers to question post', () => {
    const postId = 1
    const expectedAction = {
      type: actions.GET_QUESTION_ANSWER,
      postId,
    }
    expect(actions.getQuestionAnswer(postId)).toEqual(expectedAction)
  })

  it('should create an action to select an answer', () => {
    const qid = 1
    const aid = 2
    const expectedAction = {
      type: actions.SELECT_QUESTION_ANSWER,
      qid,
      aid,
    }
    expect(actions.selectQuestionAnswer(qid, aid)).toEqual(expectedAction)
  })

  it('should create an action to update answers to a question', () => {
    const answerList = {
      id: 1,
      content: 'answer',
      author: 'user',
    }
    const expectedAction = {
      type: actions.UPDATE_QUESTION_ANSWER,
      answerList,
    }
    expect(actions.updateQuestionAnswer(answerList)).toEqual(expectedAction)
  })
})
