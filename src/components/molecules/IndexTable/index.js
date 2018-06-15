import React, { PropTypes } from 'react'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'
import * as colors from 'material-ui/styles/colors'
import ActionInfo from 'material-ui/svg-icons/action/info'
import ActionHelp from 'material-ui/svg-icons/action/help'
import _ from 'lodash'

const styles = {
  chip: {
    display: 'block',
    margin: '20px',
    width: '80%',
    textAlign: 'center',
  },
  label: {
    fontSize: 20,
    color: colors.indigo500,
    width: 'auto',
    textAlign: 'center',
    whiteSpace: 'initial',
  },
  tag: {
    color: colors.orange800,
    fontSize: 14,
    textAlgin: 'center',
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
          labelStyle={styles.label}
        >
          {question.title}
          <span style={styles.tag}>{displayTags(question.tags)}</span>
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
          labelStyle={styles.label}
        >
          {information.title}
          <span style={styles.tag}>{displayTags(information.tags)}</span>
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
