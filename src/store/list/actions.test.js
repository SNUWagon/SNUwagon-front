import * as actions from './actions'

describe('list actions', () => {
  it('should create an action to get question list', () => {
    const expectedAction = {
      type: actions.GET_QUESTION_LIST,
    }
    expect(actions.getQuestionList()).toEqual(expectedAction)
  })

  it('should create an action to update question list', () => {
    const postList = []
    const expectedAction = {
      type: actions.UPDATE_QUESTION_LIST,
      postList,
    }
    expect(actions.updateQuestionList(postList)).toEqual(expectedAction)
  })

  it('should create an action to get information list', () => {
    const expectedAction = {
      type: actions.GET_INFORMATION_LIST,
    }
    expect(actions.getInformationList()).toEqual(expectedAction)
  })

  it('should create an action to update information list', () => {
    const postList = []
    const expectedAction = {
      type: actions.UPDATE_INFORMATION_LIST,
      postList,
    }
    expect(actions.updateInformationList(postList)).toEqual(expectedAction)
  })
})
