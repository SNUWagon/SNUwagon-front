import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { QuestionPage } from 'components'

storiesOf('QuestionPage', module)
  .add('default', () => (
    <QuestionPage />
  ))
