import React from 'react'
import { storiesOf } from '@kadira/storybook'
import PostListCell from '.'

storiesOf('PostListCell', module)
  .add('default', () => (
    <PostListCell>Hello</PostListCell>
  ))
  .add('reverse', () => (
    <PostListCell reverse>Hello</PostListCell>
  ))
