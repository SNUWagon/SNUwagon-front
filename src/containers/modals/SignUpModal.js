import React from 'react'
import { connect } from 'react-redux'
import BaseModal from '../../components/molecules/BaseModal'
import { updateSignUpModal } from '../../store/display/actions'

const mapStateToProps = (state) => {
  return {
    modalState: state.display.isSignUpModalOpened,
    content: state.display.signUpModalContent,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClose: (content) => {
      dispatch(updateSignUpModal(false, content))
    },
  }
}

const SignUpModal = props => <BaseModal {...props} />
export default connect(mapStateToProps, mapDispatchToProps)(SignUpModal)
