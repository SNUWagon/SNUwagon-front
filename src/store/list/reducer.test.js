import * as actions from './actions'
import listReducer from './reducer'
import { initialState } from './selectors'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(listReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle update question list', () => {
    const postList = [
      {
        title: 'test',
        id: 1,
        due: 'due',
        created: 'time',
      },
    ]

    expect(listReducer(initialState, actions.updateQuestionList(postList)))
      .toEqual(Object.assign({}, initialState, {
        questionList: [
          ...postList,
        ],
      }))
  })

  it('should handle update information list', () => {
    const postList = [
      {
        title: 'test',
        id: 1,
        due: 'due',
        created: 'time',
      },
    ]

    expect(listReducer(initialState, actions.updateInformationList(postList)))
      .toEqual(Object.assign({}, initialState, {
        informationList: [
          ...postList,
        ],
      }))
  })
})
