import * as actions from './actions'
import { initialState } from './selectors'

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_POST_LIST:
      return [
        ...action.postList,
      ]
      // return Object.assign([], action.postList)
    default:
      return state
  }
}

export default listReducer
