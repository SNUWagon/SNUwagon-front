import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { QuestionWritePage } from 'components'

storiesOf('QuestionWritePage', module)
  .add('default', () => (
    <QuestionWritePage />
  ))
