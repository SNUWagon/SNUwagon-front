import React, { PropTypes } from 'react'
import { ListItem } from 'material-ui/List'
import ActionInfo from 'material-ui/svg-icons/action/info'
import ActionHelp from 'material-ui/svg-icons/action/help'
import * as colors from 'material-ui/styles/colors'


const PostListElement = ({ onClick, type, title, due, tags, rightIcon }) => {
  const getTypeIcon = () => {
    let icon
    if (type === 'question') {
      icon = (<ActionHelp />)
    } else if (type === 'information') {
      icon = (<ActionInfo />)
    }
    return icon
  }

  const formatTags = (tags) => {
    return tags.reduce((accum, value) => {
      return `${accum} #${value}`
    }, '')
  }

  const formatDue = (due) => {
    const d = new Date(due)
    return d.toLocaleString()
  }

  return (
    <ListItem
      leftIcon={getTypeIcon()}
      rightIcon={rightIcon}
      primaryText={title}
      secondaryText={
        <p>
          <span style={{ color: colors.indigoA200 }}>{formatTags(tags)}</span><br />
          ~{formatDue(due)}
        </p>
      }
      secondaryTextLines={2}
      onClick={onClick}
    />
  )
}

PostListElement.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  due: PropTypes.string,
  onClick: PropTypes.func,
  tags: PropTypes.array,
  rightIcon: PropTypes.any,
}

export default PostListElement
