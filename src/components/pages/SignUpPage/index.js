import React from 'react'
import AuthContainer from '../../organisms/AuthContainer'
import SignUpBox from '../../../containers/SignUpBox'
import SignUpModal from '../../../containers/modals/SignUpModal'

const SignUpPage = () => {
  return (
    <div>
      <AuthContainer>
        <SignUpBox />
      </AuthContainer>
      <SignUpModal />
    </div>
  )
}

export default SignUpPage
