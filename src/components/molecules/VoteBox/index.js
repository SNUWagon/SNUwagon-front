import React, { PropTypes } from 'react'
import * as colors from 'material-ui/styles/colors'
import ThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ThumbDown from 'material-ui/svg-icons/action/thumb-down'
import IconButton from 'material-ui/IconButton'

const styles = {
  // icon: {},
  value: {
    fontSize: 20,
  },
}

const VoteBox = ({ onClickUpVote, onClickDownVote, upVoteValue, downVoteValue }) => {
  return (
    <div>
      <IconButton
        iconStyle={{ color: colors.lightGreen400 }}
        onClick={onClickUpVote}
      >
        <ThumbUp />
      </IconButton>
      <span
        style={{
          fontSize: 20,
          color: colors.lightGreen400,
        }}
      >
        {`+${upVoteValue}`}
      </span>
      <IconButton
        iconStyle={{ color: colors.red400 }}
        onClick={onClickDownVote}
      >
        <ThumbDown />
      </IconButton>
      <span
        style={{
          fontSize: 20,
          color: colors.red400,
        }}
      >
        {`-${downVoteValue}`}
      </span>
    </div>
  )
}

VoteBox.propTypes = {
  upVoteValue: PropTypes.number,
  downVoteValue: PropTypes.number,
  onClickUpVote: PropTypes.func,
  onClickDownVote: PropTypes.func,
}

export default VoteBox
