import * as actions from './actions'

describe('list actions', () => {
  it('should create an action to get post list', () => {
    const expectedAction = {
      type: actions.GET_POST_LIST,
    }
    expect(actions.getPostList()).toEqual(expectedAction)
  })

  it('should create an action to update post list', () => {
    const postList = []
    const expectedAction = {
      type: actions.UPDATE_POST_LIST,
      postList,
    }
    expect(actions.updatePostList(postList)).toEqual(expectedAction)
  })
})
