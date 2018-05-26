import React from 'react'
import { mapStateToProps, mapDispatchToProps } from './SignInBox'

describe('SignInBoxContainer', () => {
  it('mapStateToProps', () => {
    expect(mapStateToProps()).toEqual({})
  })

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onClickSignIn()
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'SIGN_IN' })
    mapDispatchToProps(dispatch).onClickSignUp()
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'CHANGE_ROUTE' })
  })
})
