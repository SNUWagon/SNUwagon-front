export const GET_POST_LIST = 'GET_POST_LIST'
export const UPDATE_POST_LIST = 'UPDATE_POST_LIST'

export const getPostList = () => {
  return {
    type: GET_POST_LIST,
  }
}

export const updatePostList = (postList) => {
  return {
    type: UPDATE_POST_LIST,
    postList,
  }
}
