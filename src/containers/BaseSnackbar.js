import React from 'react'
import { connect } from 'react-redux'
import BaseSnackbar from '../components/molecules/BaseSnackbar'
import { updateSnackbar } from '../store/display/actions'

export const mapStateToProps = (state) => {
  return {
    open: state.display.snackbarState,
    content: state.display.snackbarContent,
    duration: state.display.duration || undefined,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    onClose: (content) => {
      dispatch(updateSnackbar(false, content))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseSnackbar)
