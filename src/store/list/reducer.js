import * as actions from './actions'
import { initialState } from './selectors'

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_QUESTION_LIST:
      return Object.assign({}, state, {
        questionList: [
          ...action.postList,
        ],
      })
    case actions.UPDATE_INFORMATION_LIST:
      return Object.assign({}, state, {
        informationList: [
          ...action.postList,
        ],
      })
    default:
      return state
  }
}

export default listReducer
