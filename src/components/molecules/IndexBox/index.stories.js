import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { IndexBox } from 'components'

storiesOf('IndexBox', module)
  .add('default', () => (
    <IndexBox>Hello</IndexBox>
  ))
  .add('reverse', () => (
    <IndexBox reverse>Hello</IndexBox>
  ))
