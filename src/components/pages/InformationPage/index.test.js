import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { InformationPageShallow, mapStateToProps, mapDispatchToProps } from '.'

const wrap = (props = {}) => shallow(<InformationPageShallow {...props} />)

const mockStore = configureStore([])
const initialState = {
  user: {
    login: true,
    profile: {
      userId: 1,
      username: 'user',
      credit: 100,
    },
  },
  information: {
    postId: undefined,
    title: undefined,
    content: undefined,
    hiddenExist: undefined,
    hiddenContent: undefined,
    hiddenContentCost: undefined,
    hiddenBought: undefined,
    due: undefined,
    author: undefined,
    sponsorCredit: undefined,
    tags: undefined,
  },
}
const store = mockStore(initialState)

describe('InformationPage', () => {
  it('renders', () => {
    const props = {
      store,
      initialState,
      params: {
        id: 1,
      },
      loadInformation: jest.fn(),
    }
    const wrapper = wrap(props)
  })

  // it('loads questions when mounted', () => {
  //   const props = {
  //     store,
  //     params: {
  //       id: 1,
  //     },
  //     loadQuestion: jest.fn(),
  //   }
  //   // const spy = jest.spyOn(QuestionPage.prototype, 'loadQuestion')
  //   const wrapper = mount(<QuestionPage {...props} />)
  //   expect(props.loadQuestion).toHaveBeenCalledWith(props.params.id)
  // })

  it('mapStateToProps', () => {
    expect(mapStateToProps(initialState)).toEqual({
      logged: true,
      profile: {
        userId: 1,
        username: 'user',
        credit: 100,
      },
    })
  })

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn()
    const postId = 1
    mapDispatchToProps(dispatch).loadInformation(postId)
    expect(dispatch.mock.calls[0][0]).toEqual({ type: 'GET_INFORMATION_POST', postId: 1 })
  })
})
