import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { TitleBar } from 'components'

storiesOf('TitleBar', module)
  .add('default', () => (
    <TitleBar>Hello</TitleBar>
  ))
  .add('reverse', () => (
    <TitleBar reverse>Hello</TitleBar>
  ))
