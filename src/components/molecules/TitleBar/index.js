import React, { PropTypes } from 'react'
import * as colors from 'material-ui/styles/colors'
import AppBar from 'material-ui/AppBar'
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton'
import IconButton from 'material-ui/IconButton'
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover'
import Menu from 'material-ui/Menu'
import MenuItem from 'material-ui/MenuItem'
import Badge from 'material-ui/Badge'
import NotificationsIcon from 'material-ui/svg-icons/social/notifications'
import { connect } from 'react-redux'
import NewsfeedElement from '../../../components/atoms/NewsfeedElement'
import WatchTagPickerDialog from '../../../components/molecules/WatchTagPickerDialog'
import { changeRoute, signOut, getUserProfile, resolveNewsfeed, postWatchTags } from '../../../store/user/actions'

class TitleBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      newsfeedOpen: false,
      profileOpen: false,
      tagPickerOpen: false,
    }

    this.handleSignIn = this.handleSignIn.bind(this)
    this.handleSignOut = this.handleSignOut.bind(this)
    this.handleTagPickerOpen = this.handleTagPickerOpen.bind(this)
    this.handleTagPickerClose = this.handleTagPickerClose.bind(this)
    this.handleTagPickerSelect = this.handleTagPickerSelect.bind(this)
    this.handleNewsfeedOpen = this.handleNewsfeedOpen.bind(this)
    this.handleNewsfeedClose = this.handleNewsfeedClose.bind(this)
    this.handleProfileOpen = this.handleProfileOpen.bind(this)
    this.handleProfileClose = this.handleProfileClose.bind(this)
  }

  componentDidMount() {
    this.props.loadProfile()
  }

  handleSignIn() {
    this.props.onClickSignIn()
  }

  handleSignOut() {
    this.props.onClickSignOut()
  }

  handleTagPickerOpen() {
    this.setState({
      profileOpen: false,
      tagPickerOpen: true,
    })
  }

  handleTagPickerClose() {
    this.setState({
      tagPickerOpen: false,
    })
  }

  handleTagPickerSelect(tags) {
    this.props.onClickTagPicker(tags)
  }

  handleNewsfeedOpen(event) {
    event.preventDefault()
    this.setState({
      newsfeedOpen: true,
      anchorNewsfeedPopover: event.currentTarget,
    })
  }

  handleNewsfeedClose() {
    this.setState({
      newsfeedOpen: false,
    })
  }

  handleProfileOpen(event) {
    event.preventDefault()
    this.setState({
      profileOpen: true,
      anchorProfilePopover: event.currentTarget,
    })
  }

  handleProfileClose() {
    this.setState({
      profileOpen: false,
    })
  }

  render() {
    const style = {
      div: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 20,
      },
      title: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 24,
      },
      badge_inline: {
        color: colors.white,
        backgroundColor: colors.pink200,
        top: 12,
        right: 12,
      },
      badge_inline_hide: {
        display: 'none',
        color: colors.white,
        backgroundColor: colors.pink200,
        top: 12,
        right: 12,
      },
      badge: {
        width: '50%',
        height: '50%',
        bottom: 5,
      },
    }

    const profiles = (
      <div style={style.div}>
        <Badge
          badgeContent={this.props.newsfeed.length}
          badgeStyle={this.props.newsfeed.length > 0 ? style.badge_inline : style.badge_inline_hide}
          style={style.badge}
        >
          <IconButton
            style={{ height: 24 }}
            iconStyle={{ color: colors.white }}
            onClick={this.handleNewsfeedOpen}
          >
            <NotificationsIcon />
          </IconButton>
          <Popover
            open={this.state.newsfeedOpen}
            anchorEl={this.state.anchorNewsfeedPopover}
            anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
            targetOrigin={{ horizontal: 'left', vertical: 'top' }}
            onRequestClose={this.handleNewsfeedClose}
            animation={PopoverAnimationVertical}
          >
            <Menu>
              { this.props.newsfeed.map((feed) => (
                <NewsfeedElement
                  key={feed.id}
                  onClose={() => { this.props.onCloseNewsfeed(feed.id) }}
                  changeRoute={this.props.changeRoute}
                  message={feed.message}
                  type={feed.notification_type}
                  contentId={feed.content_id}
                />
              ))}
            </Menu>
          </Popover>

        </Badge>
        <FlatButton
          style={{ color: 'white' }}
          onClick={this.handleProfileOpen}
        >{ this.props.profile.username }</FlatButton>
        <Popover
          open={this.state.profileOpen}
          anchorEl={this.state.anchorProfilePopover}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleProfileClose}
          animation={PopoverAnimationVertical}
        >
          <Menu>
            <MenuItem
              primaryText={`credit: ${this.props.profile.credit}`}
              disabled
            />
            <MenuItem
              primaryText={'Set tag notification'}
              onClick={this.handleTagPickerOpen}
            />
            <MenuItem
              primaryText={'Sign out'}
              onClick={this.handleSignOut}
            />
          </Menu>
        </Popover>
      </div>
    )

    const signin = (
      <FlatButton
        className={'sign-in-button'}
        onClick={this.handleSignIn}
        style={{ color: 'white' }}
      >Sign in</FlatButton>
    )

    const title = (
      <div style={style.title}>
        <Avatar
          backgroundColor={'#FFFFFF00'}
          src={'/title.png'}
        />
        {'SNUwagon'}
      </div>
    )


    return (
      <div>
        <AppBar
          // title={'SNUwagon'}
          className={'app-bar'}
          title={title}
          showMenuIconButton={false}
          iconElementRight={this.props.logged === true ? profiles : signin}
          // onRightIconButtonClick={this.onClickRightIconButton}
          onTitleClick={this.props.onClickTitle}
          style={{
            backgroundColor: colors.indigo400,
            cursor: 'pointer',
          }}
        />
        <WatchTagPickerDialog
          open={this.state.tagPickerOpen}
          tagList={this.props.tagList.map(tag => `#${tag}`)}
          watchTagList={this.props.watchTags}
          onClick={tags => this.handleTagPickerSelect(tags)}
          onClose={this.handleTagPickerClose}
        />
      </div>
    )
  }
}

TitleBar.propTypes = {
  logged: PropTypes.bool,
  profile: PropTypes.object,
  newsfeed: PropTypes.array,
  tagList: PropTypes.array,
  watchTags: PropTypes.array,
  onClickSignIn: PropTypes.func,
  onClickSignOut: PropTypes.func,
  onClickTitle: PropTypes.func,
  onCloseNewsfeed: PropTypes.func,
  onClickTagPicker: PropTypes.func,
  changeRoute: PropTypes.func,
  loadProfile: PropTypes.func,
  reverse: PropTypes.bool,
}

export const mapStateToProps = (state) => {
  return {
    logged: state.user.login,
    profile: state.user.profile,
    newsfeed: state.user.newsfeed,
    tagList: state.search.tagList,
    watchTags: state.user.watchTags,
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
    changeRoute: (route) => {
      dispatch(changeRoute(route))
    },
    onCloseNewsfeed: (nid) => {
      dispatch(resolveNewsfeed(nid))
    },
    onClickTagPicker: (tags) => {
      dispatch(postWatchTags(tags))
    },
  }
}

export const TitleBarShallow = TitleBar
export default connect(mapStateToProps, mapDispatchToProps)(TitleBar)
