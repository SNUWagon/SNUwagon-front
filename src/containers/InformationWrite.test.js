import React from 'react'
import { InformationWrite } from 'containers'
import { mapStateToProps, mapDispatchToProps } from 'containers/InformationWrite'

const initialState = {
  information: undefined,
}

describe('InformationWriteContainer', () => {
  it('mapStateToProps', () => {
    expect(mapStateToProps(initialState).information).toEqual(undefined)
  })

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onClickWriteInformation()
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'WRITE_INFORMATION_POST' })
    mapDispatchToProps(dispatch).onClickBack()
    expect(dispatch.mock.calls[1][0]).toEqual({ type: 'CHANGE_ROUTE' })
  })
})
