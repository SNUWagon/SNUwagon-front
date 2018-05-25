import * as actions from './actions'

describe('search actions', () => {
  it('should create an action to search questions with title', () => {
    const query = 'query'
    const expectedAction = {
      type: actions.SEARCH_QUESTIONS_WITH_TITLE,
      query,
    }
    expect(actions.searchQuestionWithTitle(query)).toEqual(expectedAction)
  })

  it('should create an action to search questions with tag', () => {
    const query = 'query'
    const expectedAction = {
      type: actions.SEARCH_QUESTIONS_WITH_TAG,
      query,
    }
    expect(actions.searchQuestionWithTag(query)).toEqual(expectedAction)
  })

  it('should create an action to search informations with title', () => {
    const query = 'query'
    const expectedAction = {
      type: actions.SEARCH_INFORMATIONS_WITH_TITLE,
      query,
    }
    expect(actions.searchInformationWithTitle(query)).toEqual(expectedAction)
  })

  it('should create an action to search informations with tag', () => {
    const query = 'query'
    const expectedAction = {
      type: actions.SEARCH_INFORMATIONS_WITH_TAG,
      query,
    }
    expect(actions.searchInformationWithTag(query)).toEqual(expectedAction)
  })

  it('should create an action to update question search result', () => {
    const postList = []
    const expectedAction = {
      type: actions.UPDATE_QUESTIONS_SEARCH_RESULT,
      postList,
    }
    expect(actions.updateQuestionSearchResult(postList)).toEqual(expectedAction)
  })

  it('should create an action to update information search result', () => {
    const postList = []
    const expectedAction = {
      type: actions.UPDATE_INFORMATIONS_SEARCH_RESULT,
      postList,
    }
    expect(actions.updateInformationSearchResult(postList)).toEqual(expectedAction)
  })

  it('should create an action to get tag list', () => {
    const expectedAction = {
      type: actions.GET_TAG_LIST,
    }
    expect(actions.getTagList()).toEqual(expectedAction)
  })

  it('should create an action to update tag list', () => {
    const tagList = []
    const expectedAction = {
      type: actions.UPDATE_TAG_LIST,
      tagList,
    }
    expect(actions.updateTagList()).toEqual(expectedAction)
  })
})
