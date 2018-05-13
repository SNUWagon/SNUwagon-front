import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import Button from '../../atoms/BaseButton'
import Input from '../../atoms/BaseInput'

const style = {
  height: 500,
  width: 500,
  margin: 30,
  textAlign: 'center',
  display: 'inline-block',
  padding: '20px 20px 20px 20px',
}

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
    <Paper style={style} zDepth={3}>
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
    </Paper>
  )
}

SignInBox.propTypes = {
  onClickSignIn: PropTypes.func,
  onClickSignUp: PropTypes.func,
  reverse: PropTypes.bool,
}

export default SignInBox
