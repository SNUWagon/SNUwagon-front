import React from 'react'
import { ProfileHeader } from 'containers'
import { mapStateToProps, mapDispatchToProps } from 'containers/ProfileHeader'

export const initialState = {
  user: {
    login: true,
    profile: {
      userId: 1,
      username: 'user',
      credit: 100,
    },
  },
}

describe('ProfileHeaderContainer', () => {
  it('mapStateToProps', () => {
    expect(mapStateToProps(initialState).username).toEqual('user')
    expect(mapStateToProps(initialState).userId).toEqual(1)
    expect(mapStateToProps(initialState).credit).toEqual(100)
  })

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onClickWriteQuestion()
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'CHANGE_ROUTE' })
  })
})
