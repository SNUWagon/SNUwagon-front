import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

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
      // author:state.user.profile.username, tags
      onClickWriteQuestion(title.value, content.value, due.value, bounty.value, state.user.profile.username)
      title.value = ''
      content.value = ''
      due.value = ''
      bounty.value = ''
    }
  }

  return (
    <Wrapper>
      Write a question!
      <Input
        className={'title-input'} placeholder={'Title'}
        onChange={node => { title = node.target }}
      />
      <br />
      <Input
        className={'content-input'} placeholder={'Content'}
        onChange={node => { content = node.target }} type={'textarea'}
      />
      <br />
      <Input
        className={'due-input'}
        onChange={node => { due = node.target }} type={'datetime-local'}
      />
      <Input
        className={'bounty-input'} placeholder={'Bounty'}
        onChange={node => { bounty = node.target }} type={'number'} pattern={'d+'} min={'1'} step={'1'}
      />
      <br />
      <Button className={'back-button'} type={'submit'} onClick={onClickBackButton}>Back</Button>
      {'   '}
      <Button className={'write-question-button'} type={'submit'} onClick={onClickWriteQuestionButton}>Submit Question</Button>
    </Wrapper>
  )
}

QuestionWrite.propTypes = {
  onClickBack: PropTypes.func,
  onClickWriteQuestion: PropTypes.func,
  state: PropTypes.object,
  reverse: PropTypes.bool,
}

export default QuestionWrite
