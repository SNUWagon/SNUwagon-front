import { connect } from 'react-redux'
import SignUpBox from '../components/molecules/SignUpBox'
import { signUp, changeRoute } from '../store/user/actions'

export const mapStateToProps = () => {
  return {}
}


export const mapDispatchToProps = (dispatch) => {
  return {
    onClickSignUp: (email, username, password) => {
      dispatch(signUp(email, username, password))
    },
    onClickBack: (route) => {
      dispatch(changeRoute(route))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpBox)
