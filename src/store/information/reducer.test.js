import * as actions from './actions'
import informationReducer from './reducer'
import { initialState } from './selectors'

describe('information reducer', () => {
  it('should return the initial state', () => {
    expect(informationReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle update information post', () => {
    const postId = 1
    const title = 'title'
    const content = 'content'
    const hiddenExist = true
    const hiddenContent = 'hidden'
    const hiddenContentCost = 10
    const hiddenBought = true
    const due = '0001-01-01T01:01:00Z'
    const author = 'authorname'
    const tags = 'tag'
    expect(informationReducer({}, actions.updateInformationPost(postId, title, content, hiddenExist, hiddenContent, hiddenContentCost, hiddenBought, due, author, tags)))
      .toEqual({
        postId,
        title,
        content,
        hiddenExist,
        hiddenContent,
        hiddenContentCost,
        hiddenBought,
        due,
        author,
        tags,
      })
  })
})
