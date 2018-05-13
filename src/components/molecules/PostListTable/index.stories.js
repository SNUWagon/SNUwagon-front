import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { PostListTable } from 'components'

storiesOf('PostListTable', module)
  .add('default', () => (
    <PostListTable>Hello</PostListTable>
  ))
  .add('reverse', () => (
    <PostListTable reverse>Hello</PostListTable>
  ))
