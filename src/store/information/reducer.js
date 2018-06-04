import { initialState } from './selectors'
import * as actions from './actions'

const informationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_INFORMATION_POST:
      return Object.assign({}, state, {
        postId: action.postId,
        title: action.title,
        content: action.content,
        hiddenExist: action.hiddenExist,
        hiddenContent: action.hiddenContent,
        hiddenContentCost: action.hiddenContentCost,
        hiddenBought: action.hiddenBought,
        due: action.due,
        author: action.author,
        tags: action.tags,
        created: action.created,
      })
    default:
      return state
  }
}

export default informationReducer
