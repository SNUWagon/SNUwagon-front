import React from 'react'
import { mapStateToProps, mapDispatchToProps } from './SignUpBox'

describe('SignUpBoxContainer', () => {
  it('mapStateToProps', () => {
    expect(mapStateToProps()).toEqual({})
  })

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onClickSignUp()
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SIGN_UP' })
    mapDispatchToProps(dispatch).onClickBack()
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'CHANGE_ROUTE' })
  })
})
