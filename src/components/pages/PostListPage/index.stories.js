import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PostListPage } from 'components'

storiesOf('PostListPage', module)
  .add('default', () => (
    <PostListPage />
  ))
