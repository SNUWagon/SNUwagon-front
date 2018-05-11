import * as actions from './actions'
import userReducer from './reducer'
import { initialState } from './selectors'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle update user profile', () => {
    const userId = 1
    const username = 'user'
    const credit = 100
    expect(userReducer({}, actions.updateUserProfile(userId, username, credit)))
      .toEqual({
        login: true,
        profile: {
          userId,
          username,
          credit,
        },
      })
  })
})
