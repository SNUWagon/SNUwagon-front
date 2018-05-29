import React, { PropTypes } from 'react'
import SignInBox from '../../../containers/SignInBox'
import AuthContainer from '../../organisms/AuthContainer'
import SignInModal from '../../../containers/modals/SignInModal'
import BaseSnackbar from '../../../containers/BaseSnackbar'

const SignInPage = () => {
  return (
    <div>
      <AuthContainer>
        <SignInBox />
      </AuthContainer>
      <SignInModal />
      <BaseSnackbar />
    </div>
  )
}

export default SignInPage
