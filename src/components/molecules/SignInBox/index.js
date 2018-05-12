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
  text-align: center;
`

const ButtonP = styled.p`
  text-align: center;
`

const SignInBox = ({ onClickSignIn, onClickSignUp }) => {
  let username
  let password

  const onClickSignInButton = () => {
    if (username && password) {
      onClickSignIn(username.value, password.value)
      username.value = ''
      password.value = ''
    }
  }

  const onClickSignUpButton = () => {
    onClickSignUp('/signup')
  }

  return (
    <SignInDiv>
      <h1>Sign In</h1>
      <Input
        className={'username-input'} placeholder={'Username'}
        onChange={node => { username = node.target }}
      />
      <br />
      <Input
        className={'password-input'} placeholder={'Password'} type={'password'}
        onChange={node => { password = node.target }}
      />
      <ButtonP>
        <Button className={'sign-in-button'} type={'submit'} onClick={onClickSignInButton}>Sign In</Button>
        {'  '}
        <Button className={'sign-up-button'} type={'submit'} onClick={onClickSignUpButton}>Sign Up</Button>
      </ButtonP>
    </SignInDiv>
  )
}

SignInBox.propTypes = {
  onClickSignIn: PropTypes.func,
  onClickSignUp: PropTypes.func,
  reverse: PropTypes.bool,
}

export default SignInBox
