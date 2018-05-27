import React from 'react'
import { Information } from 'containers'
import { mapStateToProps, mapDispatchToProps } from 'containers/Information'

const initialState = {
  user: undefined,
  information: undefined,
  informationId: undefined,
}

describe('InformationContainer', () => {
  it('mapStateToProps', () => {
    const ownProps = {
      id: 1,
    }
    expect(mapStateToProps(initialState, ownProps).user).toEqual(undefined)
    expect(mapStateToProps(initialState, ownProps).information).toEqual(undefined)
    expect(mapStateToProps(initialState, ownProps).informationId).toEqual(ownProps.id)
  })

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    mapDispatchToProps(dispatch).onClickPurchase()
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'PURCHASE_INFORMATION_POST' })
  })
})
