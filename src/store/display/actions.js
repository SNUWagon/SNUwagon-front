export const UPDATE_SIGN_IN_MODAL = 'UPDATE_SIGN_IN_MODAL'

export const updateSignInModal = (modalState, content) => {
  return {
    type: UPDATE_SIGN_IN_MODAL,
    modalState,
    content,
  }
}
