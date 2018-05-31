export const CHANGE_ROUTE = 'CHANGE_ROUTE'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const SIGN_OUT = 'SIGN_OUT'
export const GET_USER_PROFILE = 'GET_USER_PROFILE'
export const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE'
export const SHOW_NOTIFICATION = 'SHOW_NOTIFICATION'
export const GET_NEW_PUSH_NOTIFICATION = 'GET_NEW_PUSH_NOTIFICATION'
export const GET_NEWSFEED = 'GET_NEWSFEED'
export const UPDATE_NEWSFEED = 'UPDATE_NEWSFEED'
export const RESOLVE_NEWSFEED = 'RESOLVE_NEWSFEED'

export const changeRoute = (route) => {
  return {
    type: CHANGE_ROUTE,
    route,
  }
}


export const signIn = (username, password) => {
  return {
    type: SIGN_IN,
    username,
    password,
  }
}

export const signUp = (email, username, password) => {
  return {
    type: SIGN_UP,
    email,
    username,
    password,
  }
}

export const signOut = () => {
  return {
    type: SIGN_OUT,
  }
}

export const getUserProfile = () => {
  return {
    type: GET_USER_PROFILE,
  }
}

export const updateUserProfile = (userId, username, credit) => {
  return {
    type: UPDATE_USER_PROFILE,
    userId,
    username,
    credit,
  }
}

export const getNewPushNotification = (update = true) => {
  return {
    type: GET_NEW_PUSH_NOTIFICATION,
    update,
  }
}

export const showNotification = (message, options) => {
  return {
    type: SHOW_NOTIFICATION,
    message,
    options,
  }
}

export const getNewsfeed = () => {
  return {
    type: GET_NEWSFEED,
  }
}

export const resolveNewsfeed = (nid) => {
  return {
    type: RESOLVE_NEWSFEED,
    nid,
  }
}

export const updateNewsfeed = (newsfeed) => {
  return {
    type: UPDATE_NEWSFEED,
    newsfeed,
  }
}
