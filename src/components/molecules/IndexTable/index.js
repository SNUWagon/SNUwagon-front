import React, { PropTypes } from 'react'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import * as colors from 'material-ui/styles/colors'
import _ from 'lodash'

const styles = {
  chip: {
    margin: 20,
  },
  tag: {
    color: colors.blueGrey400,
  },
  wrapper: {
    margin: '30px 0',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

// TODO: also show tags
const IndexTable = ({ logged, questionList, informationList, onNotLoggedIn, changeRoute }) => {
  const displayingQuestionCount = 5
  const displayingInformationCount = 5

  const onClickQuestionChip = (questionId) => {
    if (logged !== true) onNotLoggedIn()
    else changeRoute(`/question/${questionId}`)
  }

  const onClickInformationChip = (informationId) => {
    if (logged !== true) onNotLoggedIn()
    else changeRoute(`/information/${informationId}`)
  }

  const displayTags = (tags) => {
    return tags.reduce((accum, value) => {
      return `${accum} #${value}`
    }, '')
  }

  // TODO: This is for test, after tag API is implemented, must be removed
  const tags = ['testtag1', 'testtag2']

  return (
    <div style={styles.wrapper}>
      <Divider />
      <Subheader>Recent Questions</Subheader>
      { questionList.slice(0, displayingQuestionCount).map(question => (
        <Chip
          className={'question-list-chip'}
          key={question.id}
          onClick={() => onClickQuestionChip(question.id)}
          style={styles.chip}
        >
          <Avatar
            size={32}
            color={colors.darkWhite}
            backgroundColor={colors.indigo200}
          >
            {question.bounty}
          </Avatar>
          {question.title}
          {/* <span style={styles.tag}>{displayTags(question.tags)}</span> */}
          <span style={styles.tag}>{displayTags(tags)}</span>
        </Chip>
      ))}
      <Divider />
      <Subheader>Sponsored Information</Subheader>
      <Divider />
      { informationList.slice(0, displayingInformationCount).map(information => (
        <Chip
          className={'information-list-chip'}
          key={information.id}
          onClick={() => onClickInformationChip(information.id)}
          style={styles.chip}
        >
          {information.title}
          {/* <span style={styles.tag}>{displayTags(information.tags)}</span> */}
          <span style={styles.tag}>{displayTags(tags)}</span>
        </Chip>
      ))}
    </div>
  )
}

IndexTable.propTypes = {
  logged: PropTypes.bool,
  questionList: PropTypes.array,
  informationList: PropTypes.array,
  onNotLoggedIn: PropTypes.func,
  changeRoute: PropTypes.func,
}

export default IndexTable
