import React, { PropTypes } from 'react'
import * as colors from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
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
    const style = {
      div: {
        display: 'flex',
        alignItems: 'center',
      },
    }

    const profiles = (
      <div style={style.div}>
        <FlatButton style={{ color: 'white' }}>{ this.props.profile.username }</FlatButton>
        <FlatButton style={{ color: 'white' }}>{ this.props.profile.credit }</FlatButton>
        <FlatButton style={{ color: 'white' }}>Sign out</FlatButton>
      </div>
    )

    const title = (
      <div style={style.div}>
        <Avatar
          src={'/title.png'}
        />
        {'SNUwagon'}
      </div>
    )


    return (
      <AppBar
        // title={'SNUwagon'}
        title={title}
        showMenuIconButton={false}
        iconElementRight={this.props.logged === true ? profiles : <FlatButton>Sign in</FlatButton>}
        onRightIconButtonClick={this.onClickRightIconButton}
        onTitleClick={this.props.onClickTitle}
        style={{
          backgroundColor: colors.indigo500,
          cursor: 'pointer',
        }}
      />
    )
  }
}

TitleBar.propTypes = {
  logged: PropTypes.bool,
  profile: PropTypes.object,
  onClickSignIn: PropTypes.func,
  onClickSignOut: PropTypes.func,
  onClickTitle: PropTypes.func,
  loadProfile: PropTypes.func,
  reverse: PropTypes.bool,
}

export const mapStateToProps = (state) => {
  return {
    logged: state.user.login,
    profile: state.user.profile,
  }
}


export const mapDispatchToProps = (dispatch) => {
  return {
    onClickTitle: () => {
      dispatch(changeRoute('/'))
    },
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

export const TitleBarShallow = TitleBar
export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)
