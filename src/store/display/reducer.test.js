import * as actions from './actions'
import displayReducer from './reducer'
import { initialState } from './selectors'

describe('display reducer', () => {
  it('should return the initial state', () => {
    expect(displayReducer(undefined, {}))
      .toEqual(initialState)
  })

  it('should handle update sign in modal', () => {
    const modalState = true
    const content = 'content'
    expect(displayReducer({}, actions.updateSignInModal(modalState, content)).isSignInModalOpened)
      .toBe(modalState)
    expect(displayReducer({}, actions.updateSignInModal(modalState, content)).signInModalContent)
      .toBe(content)
  })
})
