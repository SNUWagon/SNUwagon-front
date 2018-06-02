import * as actions from './actions'
import displayReducer from './reducer'
import { initialState } from './selectors'

describe('display reducer', () => {
  it('should return the initial state', () => {
    expect(displayReducer(undefined, {}))
      .toEqual(initialState)
  })

  it('should handle update base modal', () => {
    const modalState = true
    const content = 'content'
    expect(displayReducer({}, actions.updateModal(modalState, content)).isModalOpened)
      .toBe(modalState)
    expect(displayReducer({}, actions.updateModal(modalState, content)).modalContent)
      .toBe(content)
  })

  it('should handle update snackbar', () => {
    const snackbarState = true
    const content = 'content'
    expect(displayReducer({}, actions.updateSnackbar(snackbarState, content)).snackbarState)
      .toBe(snackbarState)
    expect(displayReducer({}, actions.updateSnackbar(snackbarState, content)).snackbarContent)
      .toBe(content)
  })

  it('should handle update sign in modal', () => {
    const modalState = true
    const content = 'content'
    expect(displayReducer({}, actions.updateSignInModal(modalState, content)).isSignInModalOpened)
      .toBe(modalState)
    expect(displayReducer({}, actions.updateSignInModal(modalState, content)).signInModalContent)
      .toBe(content)
  })

  it('should handle update sign up in modal', () => {
    const modalState = true
    const content = 'content'
    expect(displayReducer({}, actions.updateSignUpModal(modalState, content)).isSignUpModalOpened)
      .toBe(modalState)
    expect(displayReducer({}, actions.updateSignUpModal(modalState, content)).signUpModalContent)
      .toBe(content)
  })

  it('should handle update loading modal', () => {
    const modalState = true
    expect(displayReducer({}, actions.updateLoadingModal(modalState)).loadingState)
      .toBe(modalState)
  })
})
