import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { SignUpBox } from 'components'

storiesOf('SignUpBox', module)
  .add('default', () => (
    <SignUpBox>Hello</SignUpBox>
  ))
  .add('reverse', () => (
    <SignUpBox reverse>Hello</SignUpBox>
  ))
