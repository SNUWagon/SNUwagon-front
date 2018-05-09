import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { ProfileHeader } from 'components'

storiesOf('ProfileHeader', module)
  .add('default', () => (
    <ProfileHeader>Hello</ProfileHeader>
  ))
  .add('reverse', () => (
    <ProfileHeader reverse>Hello</ProfileHeader>
  ))
