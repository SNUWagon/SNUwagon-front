import React from 'react'
import { storiesOf } from '@kadira/storybook'
import CustomDatePicker from '.'

storiesOf('CustomDatePicker', module)
  .add('default', () => (
    <CustomDatePicker>Hello</CustomDatePicker>
  ))
  .add('reverse', () => (
    <CustomDatePicker reverse>Hello</CustomDatePicker>
  ))
