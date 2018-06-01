import React, { PropTypes } from 'react'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import Cancel from 'material-ui/svg-icons/navigation/cancel'
import * as colors from 'material-ui/styles/colors'

const NewsfeedElement = ({ onClose, changeRoute, message, type, contentId }) => {
  const handleNewsfeedClick = () => {
    switch (type.toUpperCase()) {
      case 'NEW_ANSWER':
      case 'ANSWER_SELECTED':
        changeRoute(`/question/${contentId}`)
        break
      case 'INFORMATION_BOUGHT':
        changeRoute(`/information/${contentId}`)
        break
      default:
        break
    }
  }

  const closeIcon = (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <IconButton
        onClick={onClose}
        iconStyle={{
          color: colors.indigo600,
        }}
      >
        <Cancel />
      </IconButton>
    </div>
  )

  return (
    <MenuItem
      primaryText={message}
      rightIcon={closeIcon}
      onClick={handleNewsfeedClick}
    />
  )
}

NewsfeedElement.propTypes = {
  message: PropTypes.string,
  type: PropTypes.string,
  contentId: PropTypes.number,
  onClose: PropTypes.func,
  changeRoute: PropTypes.func,
}

export default NewsfeedElement
