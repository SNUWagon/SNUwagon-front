import * as actions from './actions'
import searchReducer from './reducer'
import { initialState } from './selectors'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle update question search result', () => {
    const postList = []
    expect(searchReducer(initialState, actions.updateQuestionSearchResult(postList)))
      .toEqual(
        Object.assign({}, initialState, { questionSearchResult: postList }),
      )
  })

  it('should handle update information search result', () => {
    const postList = []
    expect(searchReducer(initialState, actions.updateInformationSearchResult(postList)))
      .toEqual(
        Object.assign({}, initialState, { informationSearchResult: postList }),
      )
  })

  it('should handle update tag list', () => {
    const tagList = []
    expect(searchReducer(initialState, actions.updateTagList(tagList)))
      .toEqual(
        Object.assign({}, initialState, { tagList }),
      )
  })
})
