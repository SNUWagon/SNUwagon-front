import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'

const SignInDiv = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 20px 20px 20px;
  width: 310px;
  background: white;
  border-radius: 3px;
`

const ButtonP = styled.p`
  text-align: center;
`

const SignUpBox = ({ onClickSignUp, onClickBack }) => {
  let email = ''
  let username = ''
  let password = ''

  const onClickSignUpButton = () => {
    if (email && username && password) {
      onClickSignUp(email, username, password)
      email = ''
      username = ''
      password = ''
    }
  }

  const onClickBackButton = () => {
    onClickBack('/signin')
  }

  return (
    <SignInDiv>
      <Input placeholder={'Email Address'} onChange={node => { username = node.target.value }} />
      <br />
      <Input placeholder={'Username'} onChange={node => { username = node.target.value }} />
      <br />
      <Input placeholder={'Password'} type={'password'} onChange={node => { password = node.target.value }} />
      <ButtonP>
        <Button type={'submit'} onClick={onClickBackButton}>Back</Button>
        {'  '}
        <Button type={'submit'} onClick={onClickSignUpButton}>Sign Up</Button>
      </ButtonP>
    </SignInDiv>
  )
}

SignUpBox.propTypes = {
  onClickBack: PropTypes.func,
  onClickSignUp: PropTypes.func,
  reverse: PropTypes.bool,
}

export default SignUpBox
