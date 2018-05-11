import React from 'react'
import { connect } from 'react-redux'
import BaseModal from '../../components/molecules/BaseModal'
import { updateSignInModal } from '../../store/display/actions'

const mapStateToProps = (state) => {
  return {
    modalState: state.display.isSignInModalOpened,
    content: state.display.signInModalContent,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClose: (content) => {
      dispatch(updateSignInModal(false, content))
    },
  }
}

const SignInModal = props => <BaseModal {...props} />
export default connect(mapStateToProps, mapDispatchToProps)(SignInModal)
