import * as actions from './actions'

describe('question actions', () => {
  it('should create an action to write a question post', () => {
    const title = 'title'
    const content = 'content'
    const due = '0001-01-01T01:01:00Z'
    const bounty = 1
    const author = 'authorname'
    const expectedAction = {
      type: actions.WRITE_QUESTION_POST,
      title,
      content,
      due,
      bounty,
      author,
    }
    expect(actions.writeQuestionPost(title, content, due, bounty, author)).toEqual(expectedAction)
  })

  it('should create an action to get a question post', () => {
    const postId = 1
    const expectedAction = {
      type: actions.GET_QUESTION_POST,
      postId,
    }
    expect(actions.getQuestionPost(postId)).toEqual(expectedAction)
  })

  it('should create an action to delete a question post', () => {
    const postId = 1
    const expectedAction = {
      type: actions.DELETE_QUESTION_POST,
      postId,
    }
    expect(actions.deleteQuestionPost(postId)).toEqual(expectedAction)
  })

  it('should create an action to change route', () => {
    const route = '/'
    const expectedAction = {
      type: actions.CHANGE_ROUTE,
      route,
    }
    expect(actions.changeRoute(route)).toEqual(expectedAction)
  })

  it('should create an action to update a question', () => {
    const postId = 1
    const title = 'title'
    const content = 'content'
    const due = '0001-01-01T01:01:00Z'
    const bounty = 1
    const author = 'authorname'
    const resolved = false
    const selected = 2
    const tags = 'tag'
    const expectedAction = {
      type: actions.UPDATE_QUESTION_POST,
      postId,
      title,
      content,
      due,
      bounty,
      author,
      resolved,
      selected,
      tags,
    }
    expect(actions.updateQuestionPost(postId, title, content, due, bounty, author, resolved, selected, tags)).toEqual(expectedAction)
  })

  it('should create an action to answer a question', () => {
    const answer = 'answer'
    const author = 1
    const qid = 2
    const expectedAction = {
      type: actions.ANSWER_QUESTION_POST,
      answer,
      author,
      qid,
    }
    expect(actions.answerQuestionPost(answer, author, qid)).toEqual(expectedAction)
  })
})
