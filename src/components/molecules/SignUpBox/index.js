import React, { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import styled from 'styled-components'
import Input from '../../atoms/BaseInput'
import Button from '../../atoms/BaseButton'

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

const SignUpBox = ({ onClickSignUp, onClickBack }) => {
  let email
  let username
  let password

  const onClickSignUpButton = () => {
    if (email && username && password) {
      onClickSignUp(email.value, username.value, password.value)
      email.value = ''
      username.value = ''
      password.value = ''
    }
  }

  const onClickBackButton = () => {
    onClickBack('/signin')
  }

  return (
    <Paper style={style} zDepth={3}>
      <h1>Sign Up</h1>
      <Input
        className={'email-input'} placeholder={'Email Address'}
        onChange={node => { email = node.target }}
      />
      <br />
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
        <Button className={'back-button'} type={'submit'} onClick={onClickBackButton}>Back</Button>
        {'  '}
        <Button className={'sign-up-button'} type={'submit'} onClick={onClickSignUpButton}>Sign Up</Button>
      </ButtonP>
    </Paper>
  )
}

SignUpBox.propTypes = {
  onClickBack: PropTypes.func,
  onClickSignUp: PropTypes.func,
  reverse: PropTypes.bool,
}

export default SignUpBox
