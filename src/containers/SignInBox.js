import React from 'react'
import { connect } from 'react-redux'
import SignInBox from '../components/molecules/SignInBox'
import { signIn, changeRoute } from '../store/user/actions'

export const mapStateToProps = () => {
  return {}
}


export const mapDispatchToProps = (dispatch) => {
  return {
    onClickSignIn: (username, password) => {
      dispatch(signIn(username, password))
    },
    onClickSignUp: (route) => {
      dispatch(changeRoute(route))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInBox)
