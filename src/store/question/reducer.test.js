import * as actions from './actions'
import questionReducer from './reducer'
import { initialState } from './selectors'

describe('question reducer', () => {
  it('should return the initial state', () => {
    expect(questionReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle update question post', () => {
    const postId = 1
    const title = 'title'
    const content = 'content'
    const due = '0001-01-01T01:01:00Z'
    const resolved = false
    const bounty = 1
    const author = 'authorname'
    const selected = 2
    const tags = 'tag'
    expect(questionReducer({}, actions.updateQuestionPost(postId, title, content, due, bounty, author, resolved, selected, tags)))
      .toEqual({
        postId,
        title,
        content,
        due,
        bounty,
        author,
        resolved,
        selected,
        tags,
      })
  })
})
