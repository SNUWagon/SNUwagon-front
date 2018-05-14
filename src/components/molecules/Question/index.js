import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Question = ({ onClickAnswer, onClickDelete, ...props }) => {
  const q = props.question

  const onClickAnswerButton = () => {
    onClickAnswer('')
  }

  const onClickDeleteButton = () => {
    // if successful, redirect to main page.
    onClickDelete('')
  }

  const isOwner = (q.author === props.user.profile.userId)

  return (
    <Wrapper>
      <p>Question(test)</p>
      <p>Title: {q.title}</p>
      <p>Content: {q.content}</p>
      <p>Due: {q.due}</p>
      <p>bounty: {q.bounty}</p>
      <p>author: {q.author}</p>
      <p>resolved: {q.resolved}</p>
      <div>
        {isOwner ? (
          <Button className={'delete-button'} type={'submit'} onClick={onClickDeleteButton}>Delete</Button>
        ) : (
          <Button className={'answer-button'} type={'submit'} onClick={onClickAnswerButton}>Answer</Button>
        )}
      </div>
    </Wrapper>
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
