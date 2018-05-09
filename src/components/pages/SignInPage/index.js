import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import SignInBox from '../../../containers/SignInBox'
import AuthContainer from '../../organisms/AuthContainer'
import BaseModal from '../../molecules/BaseModal'
import { updateSignInModal } from '../../../store/display/actions'

const SignInPage = ({ modalState, modalContent, onClose }) => {
  return (
    <div>
      <AuthContainer>
        <SignInBox />
      </AuthContainer>
      <BaseModal showModal={modalState} onClose={onClose}>
        {modalContent}
      </BaseModal>
    </div>
  )
}

SignInPage.propTypes = {
  modalState: PropTypes.boolean,
  modalContent: PropTypes.string,
  onClose: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    modalState: state.display.isSignInModalOpened,
    modalContent: state.display.signInModalContent,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClose: (content) => {
      dispatch(updateSignInModal(false, content))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage)
