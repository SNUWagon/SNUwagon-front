export const UPDATE_SIGN_IN_MODAL = 'UPDATE_SIGN_IN_MODAL'
export const UPDATE_SIGN_UP_MODAL = 'UPDATE_SIGN_UP_MODAL'
export const UPDATE_MODAL = 'UPDATE_MODAL'
export const UPDATE_SNACKBAR = 'UPDATE_SNACKBAR'
export const UPDATE_LOADING_MODAL = 'UPDATE_LOADING_MODAL'

export const updateModal = (modalState, content) => {
  return {
    type: UPDATE_MODAL,
    modalState,
    content,
  }
}

export const updateSnackbar = (snackbarState, content) => {
  return {
    type: UPDATE_SNACKBAR,
    snackbarState,
    content,
  }
}

export const updateSignInModal = (modalState, content) => {
  return {
    type: UPDATE_SIGN_IN_MODAL,
    modalState,
    content,
  }
}

export const updateSignUpModal = (modalState, content) => {
  return {
    type: UPDATE_SIGN_UP_MODAL,
    modalState,
    content,
  }
}

export const updateLoadingModal = (modalState) => {
  return {
    type: UPDATE_LOADING_MODAL,
    modalState,
  }
}
