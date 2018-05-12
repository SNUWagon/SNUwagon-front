import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { QuestionWrite } from 'components'

storiesOf('QuestionWrite', module)
  .add('default', () => (
    <QuestionWrite>Hello</QuestionWrite>
  ))
  .add('reverse', () => (
    <QuestionWrite reverse>Hello</QuestionWrite>
  ))
