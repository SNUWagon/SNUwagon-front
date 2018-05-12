import * as actions from './actions'

describe('display actions', () => {
  it('should create action to update sign in modal', () => {
    const modalState = true
    const content = 'content'
    const expectedAction = {
      type: actions.UPDATE_SIGN_IN_MODAL,
      modalState,
      content,
    }
    expect(actions.updateSignInModal(modalState, content)).toEqual(expectedAction)
  })

  it('should create action to update signup modal', () => {
    const modalState = true
    const content = 'content'
    const expectedAction = {
      type: actions.UPDATE_SIGN_UP_MODAL,
      modalState,
      content,
    }
    expect(actions.updateSignUpModal(modalState, content)).toEqual(expectedAction)
  })
})
