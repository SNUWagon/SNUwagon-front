import React, { PropTypes } from 'react'
import * as colors from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { changeRoute, signOut, getUserProfile } from '../../../store/user/actions'

class TitleBar extends React.Component {
  constructor(props) {
    super(props)

    this.onClickRightIconButton = this.onClickRightIconButton.bind(this)
  }

  componentDidMount() {
    this.props.loadProfile()
  }

  onClickRightIconButton() {
    if (this.props.logged === true) this.props.onClickSignOut()
    else this.props.onClickSignIn()
  }

  render() {
    const profiles = (
      <div>
        <FlatButton style={{ color: 'white' }}>{ this.props.profile.username }</FlatButton>
        <FlatButton style={{ color: 'white' }}>{ this.props.profile.credit }</FlatButton>
        <FlatButton style={{ color: 'white' }}>Sign out</FlatButton>
      </div>
    )

    return (
      <AppBar
        title={'SNUwagon'}
        showMenuIconButton={false}
        iconElementRight={this.props.logged === true ? profiles : <FlatButton>Sign in</FlatButton>}
        onRightIconButtonClick={this.onClickRightIconButton}
        titleStyle={{
          textAlign: 'center',
          fontSize: '40',
        }}
        style={{
          backgroundColor: colors.indigo500,
        }}
      />
    )
  }
}

// const TitleBar = ({ logged, profile, onClickSignIn, onClickSignOut }) => {
//   const onClickRightIconButton = () => {
//     if (logged === true) onClickSignOut()
//     else onClickSignIn()
//   }
//
//   const profiles = (
//     <div>
//       <FlatButton style={{ color: 'white' }}>{ profile.username }</FlatButton>
//       <FlatButton style={{ color: 'white' }}>{ profile.credit }</FlatButton>
//       <FlatButton style={{ color: 'white' }}>Sign out</FlatButton>
//     </div>
//   )
//
//   return (
//     <AppBar
//       title={'SNUwagon'}
//       showMenuIconButton={false}
//       iconElementRight={logged === true ? profiles : <FlatButton>Sign in</FlatButton>}
//       onRightIconButtonClick={onClickRightIconButton}
//       titleStyle={{
//         textAlign: 'center',
//         fontSize: '40',
//       }}
//       style={{
//         backgroundColor: colors.indigo500,
//       }}
//     />
//   )
// }

TitleBar.propTypes = {
  logged: PropTypes.bool,
  profile: PropTypes.object,
  onClickSignIn: PropTypes.func,
  onClickSignOut: PropTypes.func,
  loadProfile: PropTypes.func,
  reverse: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    logged: state.user.login,
    profile: state.user.profile,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onClickSignIn: () => {
      dispatch(changeRoute('/signin'))
    },
    onClickSignOut: () => {
      dispatch(signOut())
    },
    loadProfile: () => {
      dispatch(getUserProfile())
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)
