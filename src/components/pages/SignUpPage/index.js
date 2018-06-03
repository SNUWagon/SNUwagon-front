import React from 'react'
import AuthContainer from '../../organisms/AuthContainer'
import SignUpBox from '../../../containers/SignUpBox'
import SignUpModal from '../../../containers/modals/SignUpModal'
import LoadingModal from '../../../containers/modals/LoadingModal'

const SignUpPage = () => {
  return (
    <div>
      <AuthContainer>
        <SignUpBox />
      </AuthContainer>
      <SignUpModal />
      <LoadingModal />
    </div>
  )
}

export default SignUpPage
