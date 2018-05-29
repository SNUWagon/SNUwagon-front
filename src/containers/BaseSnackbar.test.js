import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import BaseSnackbar, { mapStateToProps, mapDispatchToProps } from './BaseSnackbar'
import * as actions from '../store/user/actions'

describe('SignInModal container', () => {
  it('proper state is set', () => {
    expect(Object.keys(mapStateToProps({ display: {} }))).toEqual(expect.arrayContaining(['open', 'content', 'duration']))
  })

  it('proper dispatch is set', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onClose()
  })
})
