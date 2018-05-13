import * as actions from './actions'
import listReducer from './reducer'
import { initialState } from './selectors'

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(listReducer(undefined, {})).toEqual(initialState)
  })

  it('should handle update post list', () => {
    const postList = [
      {
        title: 'test',
        id: 1,
        due: 'due',
        created: 'time',
      },
    ]

    expect(listReducer(initialState, actions.updatePostList(postList)))
      .toEqual([
        ...postList,
      ])
  })
})
