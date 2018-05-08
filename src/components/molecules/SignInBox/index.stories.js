import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SignInBox } from 'components'

storiesOf('SignInBox', module)
  .add('default', () => (
    <SignInBox>Hello</SignInBox>
  ))
  .add('reverse', () => (
    <SignInBox reverse>Hello</SignInBox>
  ))
