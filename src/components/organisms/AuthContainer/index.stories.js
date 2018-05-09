import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AuthContainer } from 'components'

storiesOf('AuthContainer', module)
  .add('default', () => (
    <AuthContainer />
  ))
  .add('reverse', () => (
    <AuthContainer reverse />
  ))
