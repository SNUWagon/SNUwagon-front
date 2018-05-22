import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import SignInModal, { mapStateToProps, mapDispatchToProps } from './SignInModal'
import * as actions from '../../store/user/actions'

describe('SignInModal container', () => {
  it('proper state is set', () => {
    expect(Object.keys(mapStateToProps({ display: {} }))).toEqual(expect.arrayContaining(['modalState', 'content']))
  })

  it('proper dispatch is set', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onClose()
  })
})
