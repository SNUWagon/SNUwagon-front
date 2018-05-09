import { connect } from 'react-redux'
import ProfileHeader from '../components/molecules/ProfileHeader'

const mapStateToProps = (state) => {
  return {
    username: state.user.profile.username,
    userId: state.user.profile.userId,
    credit: state.user.profile.credit,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileHeader)
