import { connect } from 'react-redux'
import ProfileHeader from '../components/molecules/ProfileHeader'
import { changeRoute } from '../store/user/actions'

const mapStateToProps = (state) => {
  return {
    username: state.user.profile.username,
    userId: state.user.profile.userId,
    credit: state.user.profile.credit,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClickWriteQuestion: (route) => {
      dispatch(changeRoute(route))
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader)
