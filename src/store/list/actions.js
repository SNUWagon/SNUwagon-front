export const GET_QUESTION_LIST = 'GET_QUESTION_LIST'
export const UPDATE_QUESTION_LIST = 'UPDATE_QUESTION_LIST'
export const GET_INFORMATION_LIST = 'GET_INFORMATION_LIST'
export const UPDATE_INFORMATION_LIST = 'UPDATE_INFORMATION_LIST'

export const getQuestionList = () => {
  return {
    type: GET_QUESTION_LIST,
  }
}

export const updateQuestionList = (postList) => {
  return {
    type: UPDATE_QUESTION_LIST,
    postList,
  }
}

export const getInformationList = () => {
  return {
    type: GET_INFORMATION_LIST,
  }
}

export const updateInformationList = (postList) => {
  return {
    type: UPDATE_INFORMATION_LIST,
    postList,
  }
}
