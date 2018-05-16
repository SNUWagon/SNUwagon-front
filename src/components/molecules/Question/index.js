import React, { PropTypes } from 'react'
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card'
import * as colors from 'material-ui/styles/colors'
import RaisedButton from 'material-ui/RaisedButton'
import Input from '../../atoms/BaseInput'

const style = {
  width: 800,
  margin: 30,
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 20px 20px 20px',
}

const Question = ({ onClickAnswer, onClickDelete, ...props }) => {
  const q = props.question
  let answer

  const onClickAnswerButton = () => {
    if (answer) console.log(answer.value)
    // onClickAnswer('')
  }

  const onClickDeleteButton = () => {
    onClickDelete(q.postId)
  }

  const isOwner = (q.author === props.user.profile.username)

  return (
    <div style={{ textAlign: 'center', margin: '40px 0px' }}>
      <Card style={style}>
        <CardTitle title={q.title} titleStyle={{ fontSize: 30, color: colors.indigo500 }} />
        <CardText>
          <br />
          <div style={{ fontSize: 20, textAlign: 'right' }}>
            Author: {q.author}
          </div>
          <br />
          <div style={{ fontSize: 20, textAlign: 'left' }} >
            Due: {q.due}
            <br />
            Bounty: {q.bounty}
            <br />
            Resolved: {q.resolved}
            <br /><br /><br />
            {q.content}
          </div>
        </CardText>
        <CardActions actAsExpander>
          {isOwner ? (
            <RaisedButton className={'delete-button'} type={'submit'} onClick={onClickDeleteButton}>Delete</RaisedButton>
          ) : (
            <RaisedButton className={'answer-button'} type={'submit'} onClick={onClickAnswerButton}>Answer</RaisedButton>
          )}
        </CardActions>
        <CardText expandable>
          <Input
            style={{ textAlign: 'left' }}
            fullWidth
            className={'answer'} floatingLabelText="Answer Contents"
            multiLine rows={3}
            floatingLabelFixed
            onChange={node => { answer = node.target }}
          />
        </CardText>
      </Card>
    </div>
  )
}

Question.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  due: PropTypes.string,
  resolved: PropTypes.bool,
  bounty: PropTypes.number,
  author: PropTypes.string,
  tags: PropTypes.string,
  reverse: PropTypes.bool,
  onClickAnswer: PropTypes.func,
  onClickDelete: PropTypes.func,
  question: PropTypes.object,
  user: PropTypes.object,
}

export default Question
