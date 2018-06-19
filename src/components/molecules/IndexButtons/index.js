import React, { PropTypes } from 'react'
import * as colors from 'material-ui/styles/colors'
import IconButton from 'material-ui/IconButton'
import SvgIcon from 'material-ui/SvgIcon'
import Pageview from 'material-ui/svg-icons/action/pageview'
import List from 'material-ui/svg-icons/action/list'
import NewReleases from 'material-ui/svg-icons/av/new-releases'
import LiveHelp from 'material-ui/svg-icons/communication/live-help'
import Button from '../../../components/atoms/BaseButton'

const style = {
  width: '18%',
  margin: 20,
  backgroundColor: '#FFFFFF00',
}

const iconStyle = {
  width: '72px',
  height: 'auto',
}

const IndexButtons = ({ logged, onNotLoggedIn, changeRoute }) => {
  const handleClickWriteQuestion = () => {
    if (logged !== true) onNotLoggedIn()
    else changeRoute('/question')
  }

  const handleClickWriteInformation = () => {
    if (logged !== true) onNotLoggedIn()
    else changeRoute('/information')
  }

  const handleClickPostList = () => {
    changeRoute('/list')
  }

  const handleClickSearch = () => {
    changeRoute('/search')
  }

  return (
    <div>
      <IconButton
        className={'question-write-button'}
        style={style}
        iconStyle={iconStyle}
        onClick={handleClickWriteQuestion}
        tooltip={'Write Question'}
        tooltipPosition={'top-center'}
        touch
      >
        <LiveHelp color={colors.indigo300} hoverColor={colors.amber700} />
      </IconButton>
      <IconButton
        className={'information-write-button'}
        style={style}
        iconStyle={iconStyle}
        onClick={handleClickWriteInformation}
        tooltip={'Write Information'}
        tooltipPosition={'top-center'}
        touch
      >
        <NewReleases color={colors.indigo300} hoverColor={colors.amber700} />
      </IconButton>
      <IconButton
        className={'post-list-button'}
        style={style}
        iconStyle={iconStyle}
        onClick={handleClickPostList}
        tooltip={'Post List'}
        tooltipPosition={'top-center'}
        touch
      >
        <List color={colors.indigo300} hoverColor={colors.amber700} />
      </IconButton>
      <IconButton
        className={'search-button'}
        style={style}
        iconStyle={iconStyle}
        onClick={handleClickSearch}
        tooltip={'Search'}
        tooltipPosition={'top-center'}
        touch
      >
        <Pageview color={colors.indigo300} hoverColor={colors.amber700} />
      </IconButton>
    </div>
  )
}

IndexButtons.propTypes = {
  logged: PropTypes.bool,
  onNotLoggedIn: PropTypes.func,
  changeRoute: PropTypes.func,
}

export default IndexButtons
