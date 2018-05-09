import { initialState } from './selectors'
import * as actions from './actions'

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.UPDATE_USER_PROFILE:
      return Object.assign({}, state, {
        login: true,
        profile: {
          userId: action.userId,
          username: action.username,
          credit: action.credit,
        },
      })
    default:
      return state
  }
}

export default userReducer
