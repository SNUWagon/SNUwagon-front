import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Answer } from 'components'

storiesOf('Answer', module)
  .add('default', () => (
    <Answer>Hello</Answer>
  ))
  .add('reverse', () => (
    <Answer reverse>Hello</Answer>
  ))
