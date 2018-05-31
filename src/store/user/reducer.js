import { initialState } from './selectors'
import * as actions from './actions'

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_USER_PROFILE:
      return Object.assign({}, state, {
        login: action.userId !== undefined,
        profile: {
          userId: action.userId,
          username: action.username,
          credit: action.credit,
        },
      })
    case actions.UPDATE_NEWSFEED:
      return Object.assign({}, state, {
        newsfeed: action.newsfeed,
      })
    default:
      return state
  }
}

export default userReducer
