import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ProfileHeader = ({ onClickWriteQuestion, children, ...props }) => {
  const onClickWriteQuestionButton = () => {
    onClickWriteQuestion('/question')
  }
  return (
    <Wrapper>
      <p>Userinfo(test)</p>
      <p>username: {props.username}</p>
      <p>userId: {props.userId}</p>
      <p>credit: {props.credit}</p>
      <Button className={'question-write-button'} type={'submit'} onClick={onClickWriteQuestionButton}>Write Question</Button>
    </Wrapper>
  )
}

ProfileHeader.propTypes = {
  username: PropTypes.string,
  userId: PropTypes.number,
  credit: PropTypes.number,
  reverse: PropTypes.bool,
  children: PropTypes.node,
  onClickWriteQuestion: PropTypes.func,
}

export default ProfileHeader
