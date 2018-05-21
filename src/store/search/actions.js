export const SEARCH_QUESTIONS_WITH_TITLE = 'SEARCH_QUESTIONS_WITH_TITLE'
export const SEARCH_QUESTIONS_WITH_TAG = 'SEARCH_QUESTIONS_WITH_TAG'
export const SEARCH_INFORMATIONS_WITH_TITLE = 'SEARCH_INFORMATION_WITH_TITLE'
export const SEARCH_INFORMATIONS_WITH_TAG = 'SEARCH_INFORMATION_WITH_TAG'
export const UPDATE_QUESTIONS_SEARCH_RESULT = 'UPDATE_QUESTIONS_SEARCH_RESULT'
export const UPDATE_INFORMATIONS_SEARCH_RESULT = 'UPDATE_INFORMATION_SEARCH_RESULT'
export const GET_TAG_LIST = 'GET_TAG_LIST'
export const UPDATE_TAG_LIST = 'UPDATE_TAG_LIST'

export const searchQuestionWithTitle = (query) => {
  return {
    type: SEARCH_QUESTIONS_WITH_TITLE,
    query,
  }
}

export const searchQuestionWithTag = (query) => {
  return {
    type: SEARCH_QUESTIONS_WITH_TAG,
    query,
  }
}

export const searchInformationWithTitle = (query) => {
  return {
    type: SEARCH_INFORMATIONS_WITH_TITLE,
    query,
  }
}

export const searchInformationWithTag = (query) => {
  return {
    type: SEARCH_INFORMATIONS_WITH_TAG,
    query,
  }
}


export const updateQuestionSearchResult = (postList) => {
  return {
    type: UPDATE_QUESTIONS_SEARCH_RESULT,
    postList,
  }
}


export const updateInformationSearchResult = (postList) => {
  return {
    type: UPDATE_INFORMATIONS_SEARCH_RESULT,
    postList,
  }
}


export const getTagList = () => {
  return {
    type: GET_TAG_LIST,
  }
}

export const updateTagList = (tagList) => {
  return {
    type: UPDATE_TAG_LIST,
    tagList,
  }
}
