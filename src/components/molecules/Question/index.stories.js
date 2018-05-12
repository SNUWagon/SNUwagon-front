import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Question } from 'components'

storiesOf('Question', module)
  .add('default', () => (
    <Question>Hello</Question>
  ))
  .add('reverse', () => (
    <Question reverse>Hello</Question>
  ))
