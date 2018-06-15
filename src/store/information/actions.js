export const CHANGE_ROUTE = 'CHANGE_ROUTE'
export const WRITE_INFORMATION_POST = 'WRITE_INFORMATION_POST'
export const GET_INFORMATION_POST = 'GET_INFORMATION_POST'
export const UPDATE_INFORMATION_POST = 'UPDATE_INFORMATION_POST'
export const PURCHASE_INFORMATION_POST = 'PURCHASE_INFORMATION_POST'
export const GET_VOTE = 'GET_VOTE'
export const UPDATE_VOTE = 'UPDATE_VOTE'
export const POST_VOTE = 'POST_VOTE'
export const GET_INFORMATION_USER_PROFILE = 'GET_INFORMATION_USER_PROFILE'
export const UPDATE_INFORMATION_USER_PROFILE = 'UPDATE_INFORMATION_USER_PROFILE'

export const changeRoute = (route) => {
  return {
    type: CHANGE_ROUTE,
    route,
  }
}

export const writeInformationPost = (title, content, hiddenExist, hiddenContent, hiddenContentCost, hiddenBought, due, author, sponsorCredit, tags) => {
  return {
    type: WRITE_INFORMATION_POST,
    title,
    content,
    hiddenExist,
    hiddenContent,
    hiddenContentCost,
    hiddenBought,
    due,
    author,
    sponsorCredit,
    tags,
  }
}

export const getInformationPost = (postId) => {
  return {
    type: GET_INFORMATION_POST,
    postId,
  }
}

export const updateInformationPost = (postId, title, content, hiddenExist, hiddenContent, hiddenContentCost, hiddenBought, due, author, tags, created) => {
  return {
    type: UPDATE_INFORMATION_POST,
    postId,
    title,
    content,
    hiddenExist,
    hiddenContent,
    hiddenContentCost,
    hiddenBought,
    due,
    author,
    tags,
    created,
  }
}

export const purchaseInformationPost = (postId) => {
  return {
    type: PURCHASE_INFORMATION_POST,
    postId,
  }
}

export const getVote = (postId) => {
  return {
    type: GET_VOTE,
    postId,
  }
}

export const updateVote = (upVote, downVote) => {
  return {
    type: UPDATE_VOTE,
    upVote,
    downVote,
  }
}

export const postVote = (postId, voteType) => {
  return {
    type: POST_VOTE,
    postId,
    voteType,
  }
}

export const getInformationUserProfile = (userId) => {
  return {
    type: GET_INFORMATION_USER_PROFILE,
    userId,
  }
}

export const updateInformationUserProfile = (credit) => {
  return {
    type: UPDATE_INFORMATION_USER_PROFILE,
    credit,
  }
}
