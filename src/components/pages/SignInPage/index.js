import React, { PropTypes } from 'react'
import * as colors from 'material-ui/styles/colors'
import SignInBox from '../../../containers/SignInBox'
import AuthContainer from '../../organisms/AuthContainer'
import SignInModal from '../../../containers/modals/SignInModal'
import BaseSnackbar from '../../../containers/BaseSnackbar'
import LoadingModal from '../../../containers/modals/LoadingModal'

const SignInPage = () => {
  return (
    <div>
      <AuthContainer>
        <SignInBox />
      </AuthContainer>
      <SignInModal />
      <BaseSnackbar />
      <LoadingModal />
    </div>
  )
}

export default SignInPage
