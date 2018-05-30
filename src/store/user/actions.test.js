import * as actions from './actions'

describe('user actions', () => {
  it('should create an action to sign in', () => {
    const username = 'user'
    const password = 'pass'
    const expectedAction = {
      type: actions.SIGN_IN,
      username,
      password,
    }
    expect(actions.signIn(username, password)).toEqual(expectedAction)
  })

  it('should create an action to sign up', () => {
    const email = 'email'
    const username = 'user'
    const password = 'pass'
    const expectedAction = {
      type: actions.SIGN_UP,
      email,
      username,
      password,
    }
    expect(actions.signUp(email, username, password)).toEqual(expectedAction)
  })

  it('should create an action to sign up', () => {
    const expectedAction = {
      type: actions.SIGN_OUT,
    }
    expect(actions.signOut()).toEqual(expectedAction)
  })

  it('should create an action to change route', () => {
    const route = '/'
    const expectedAction = {
      type: actions.CHANGE_ROUTE,
      route,
    }
    expect(actions.changeRoute(route)).toEqual(expectedAction)
  })

  it('should create an action to get profile', () => {
    const expectedAction = {
      type: actions.GET_USER_PROFILE,
    }
    expect(actions.getUserProfile()).toEqual(expectedAction)
  })

  it('should create an action to update profile', () => {
    const userId = 1
    const username = 'user'
    const credit = 100
    const expectedAction = {
      type: actions.UPDATE_USER_PROFILE,
      userId,
      username,
      credit,
    }
    expect(actions.updateUserProfile(userId, username, credit)).toEqual(expectedAction)
  })

  it('should create an action to get new push notification', () => {
    const expectedAction = {
      type: actions.GET_NEW_PUSH_NOTIFICATION,
      update: true,
    }
    expect(actions.getNewPushNotification(true)).toEqual(expectedAction)
  })

  it('should create an action to get profile', () => {
    const message = 'asdf'
    const options = {}
    const expectedAction = {
      type: actions.SHOW_NOTIFICATION,
      message,
      options,
    }
    expect(actions.showNotification(message, options)).toEqual(expectedAction)
  })
})
