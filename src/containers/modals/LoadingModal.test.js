import React, { PropTypes } from 'react'
import { shallow } from 'enzyme'
import LoadingModal, { mapStateToProps, mapDispatchToProps } from './LoadingModal'

describe('LoadingModal container', () => {
  it('proper state is set', () => {
    expect(Object.keys(mapStateToProps({ display: {} }))).toEqual(expect.arrayContaining(['open']))
  })

  it('proper dispatch is set', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch)
  })
})
