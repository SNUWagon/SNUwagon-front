import React, { PropTypes } from 'react'
import * as colors from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar'
import FlatButton from 'material-ui/FlatButton'
import { connect } from 'react-redux'
import { changeRoute, signOut } from '../../../store/user/actions'

const TitleBar = ({ logged, onClickSignIn, onClickSignOut }) => {
  const onClickRightIconButton = () => {
    if (logged === true) onClickSignOut()
    else onClickSignIn()
  }

  return (
    <AppBar
      title={'SNUwagon'}
      showMenuIconButton={false}
      iconElementRight={logged === true ? <FlatButton>Sign out</FlatButton> : <FlatButton>Sign in</FlatButton>}
      onRightIconButtonClick={onClickRightIconButton}
      titleStyle={{
        textAlign: 'center',
        fontSize: '40',
      }}
      style={{
        backgroundColor: colors.indigo500,
        height: '250px',
      }}
    />
  )
}

TitleBar.propTypes = {
  logged: PropTypes.bool,
  onClickSignIn: PropTypes.func,
  onClickSignOut: PropTypes.func,
  reverse: PropTypes.bool,
}

const mapStateToProps = (state) => {
  return {
    logged: state.user.login,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)
