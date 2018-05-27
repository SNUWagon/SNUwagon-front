import React from 'react'
import { connect } from 'react-redux'
import BaseModal from '../../components/molecules/BaseModal'
import { updateModal } from '../../store/display/actions'

export const mapStateToProps = (state) => {
  return {
    modalState: state.display.isModalOpened,
    content: state.display.modalContent,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    onClose: (content) => {
      dispatch(updateModal(false, content))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BaseModal)
