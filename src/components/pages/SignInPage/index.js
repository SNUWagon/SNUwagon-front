import React, { PropTypes } from 'react'
import SignInBox from '../../../containers/SignInBox'
import AuthContainer from '../../organisms/AuthContainer'
import SignInModal from '../../../containers/modals/SignInModal'

const SignInPage = () => {
  return (
    <div>
      <AuthContainer>
        <SignInBox />
      </AuthContainer>
      <SignInModal />
    </div>
  )
}

export default SignInPage
