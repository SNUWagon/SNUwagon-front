import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import * as colors from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import Input from '../../atoms/BaseInput'
import CustomDatePicker from '../../atoms/CustomDatePicker'

const style = {
  height: 500,
  width: 800,
  margin: 30,
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 20px 20px 20px',
}

const QuestionWrite = ({ onClickBack, onClickWriteQuestion, state }) => {
  // state contains both user and question list

  let title
  let content
  let due
  let bounty

  const onClickBackButton = () => {
    onClickBack('')
  }

  const onClickWriteQuestionButton = () => {
    if (title && content && due && bounty) {
      // tags
      onClickWriteQuestion(title.value, content.value, due, bounty.value, state.user.profile.username)
      title.value = ''
      content.value = ''
      due = ''
      bounty.value = ''
    }
  }

  return (
    <div style={{ textAlign: 'center', margin: '40px 0px' }}>
      <Paper style={style} zDepth={3}>
        <div style={{ fontSize: 25, color: colors.indigo500 }}>
          Ask a question!
        </div>
        <br />
        <Input
          fullWidth
          className={'title-input'} floatingLabelText="Question Title"
          floatingLabelFixed
          onChange={node => { title = node.target }}
        />
        <br />
        <Input
          style={{ textAlign: 'left' }}
          fullWidth multiLine rows={5} rowsMax={5}
          floatingLabelText="Question Contents"
          floatingLabelFixed
          className={'content-input'}
          onChange={node => { content = node.target }} type={'textarea'}
        />
        <br />
        <Input
          className={'bounty-input'} hintText={'Bounty'}
          onChange={node => { bounty = node.target }} type={'number'} pattern={'d+'} min={'1'} step={'1'}
        />
        <CustomDatePicker handleChange={date => { due = date }} />
        <br />
        <RaisedButton className={'back-button'} type={'submit'} onClick={onClickBackButton}>Back</RaisedButton>
        {'   '}
        <RaisedButton className={'write-question-button'} type={'submit'} onClick={onClickWriteQuestionButton}>Submit Question</RaisedButton>
      </Paper>
    </div>
  )
}

QuestionWrite.propTypes = {
  onClickBack: PropTypes.func,
  onClickWriteQuestion: PropTypes.func,
  state: PropTypes.object,
  reverse: PropTypes.bool,
}

export default QuestionWrite
