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

class SignUpBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      email: undefined,
      username: undefined,
      password: undefined,
      isEmailValid: false,
    }

    this.onClickSignUpButton = this.onClickSignUpButton.bind(this)
    this.onClickBackButton = this.onClickBackButton.bind(this)
    this.checkEmailFormat = this.checkEmailFormat.bind(this)
    this.isAllInputValid = this.isAllInputValid.bind(this)
  }

  onClickSignUpButton() {
    if (this.state.email && this.state.username && this.state.password) {
      this.props.onClickSignUp(this.state.email.value, this.state.username.value, this.state.password.value)
      this.state.email.value = ''
      this.state.username.value = ''
      this.state.password.value = ''
    }
  }

  onClickBackButton() {
    this.props.onClickBack('/signin')
  }

  isAllInputValid() {
    return this.state.email && this.state.username && this.state.password && this.state.isEmailValid === true
  }

  checkEmailFormat() {
    if (!this.state.email) return

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@snu\.ac\.kr$/
    this.setState({ isEmailValid: emailRegex.test(String(this.state.email.value).toLowerCase()) })
  }

  render() {
    return (
      <Paper style={style} zDepth={3}>
        <h1>Sign Up</h1>
        <Input
          className={'email-input'} placeholder={'Email Address'}
          onChange={node => {
            this.setState({ email: node.target })
            this.checkEmailFormat()
          }}
          errorText={!this.state.isEmailValid && this.state.email ? 'Only SNU mail is available' : ''}
        />
        <br />
        <Input
          className={'username-input'} placeholder={'Username'}
          onChange={node => this.setState({ username: node.target })}
        />
        <br />
        <Input
          className={'password-input'} placeholder={'Password'} type={'password'}
          onChange={node => this.setState({ password: node.target })}
        />
        <ButtonP>
          <Button className={'back-button'} type={'submit'} onClick={this.onClickBackButton}>Back</Button>
          {'  '}
          {this.isAllInputValid() === true ?
            <Button className={'sign-up-button'} type={'submit'} onClick={this.onClickSignUpButton}>Sign Up</Button>
            :
            <Button className={'sign-up-button-disabled'} disabled>Sign Up</Button>
          }
        </ButtonP>
      </Paper>
    )
  }
}

SignUpBox.propTypes = {
  onClickBack: PropTypes.func,
  onClickSignUp: PropTypes.func,
  reverse: PropTypes.bool,
}

export default SignUpBox
