import { initialState } from './selectors'
import * as actions from './actions'

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_QUESTIONS_SEARCH_RESULT:
      return Object.assign({}, state, {
        questionSearchResult: [
          ...action.postList,
        ],
      })
    case actions.UPDATE_INFORMATIONS_SEARCH_RESULT:
      return Object.assign({}, state, {
        informationSearchResult: [
          ...action.postList,
        ],
      })
    case actions.UPDATE_TAG_LIST:
      return Object.assign({}, state, {
        tagList: action.tagList,
      })
    default:
      return state
  }
}

export default searchReducer
