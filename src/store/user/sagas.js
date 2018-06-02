import { take, call, fork, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import { store } from '../../index'
import * as actions from './actions'
import * as displayActions from '../display/actions'

const baseUrl = ''
const authUrl = `${baseUrl}/auth`

const loadNotificationInterval = 5000
let loadNotification

export function* handleChangeRoute(newRoute) {
  yield put(push(newRoute))
}

export function* handleSignIn(username, password) {
  const data = { username, password }
  const response = yield call(api.post, `${authUrl}/signin`, data)

  if (response.success === true) {
    yield put(actions.getUserProfile())
    yield put(actions.changeRoute('/'))
    yield put(displayActions.updateSnackbar(true, 'Hello :)'))
    yield put(actions.getNewPushNotification(false))
    loadNotification = setInterval(() => { store.dispatch(actions.getNewPushNotification()) }, loadNotificationInterval)
  } else {
    yield put(displayActions.updateSignInModal(true, response.message))
  }
}

export function* handleSignUp(email, username, password) {
  const data = { email, username, password }
  const response = yield call(api.post, `${authUrl}/signup`, data)
  if (response.success === true) {
    yield put(actions.changeRoute('/signin'))
    yield put(displayActions.updateSnackbar(true, `Activation link is sent to ${email}!`))
  } else {
    yield put(displayActions.updateSignUpModal(true, 'Duplicate Email or Username exists'))
  }
}

export function* handleSignOut() {
  const response = yield call(api.get, `${authUrl}/signout`)
  if (response.success === true) {
    yield put(actions.updateUserProfile(
      undefined,
      undefined,
      undefined,
    ))
    if (loadNotification) {
      clearInterval(loadNotification)
    }
    yield put(displayActions.updateSnackbar(true, 'See ya!'))
    yield put(actions.changeRoute('/'))
  }
}

export function* handleGetUserProfile() {
  const response = yield call(api.get, `${authUrl}/userinfo`)
  if (response.success === true) {
    yield put(actions.updateUserProfile(
      response.data.id,
      response.data.username,
      response.data.credit,
    ))
  }

  if (!loadNotification) {
    loadNotification = setInterval(() => { store.dispatch(actions.getNewPushNotification()) }, loadNotificationInterval)
    yield put(actions.getNewsfeed())
  }
}

export function* handleGetNewPushNotification(update) {
  const response = yield call(api.get, `${baseUrl}/notifications`)

  if (response.success === true) {
    if (response.data.length > 0) {
      yield put(actions.getNewsfeed())
    }

    if (update === false) {
      yield put(actions.getNewsfeed())
      return
    }

    for (let i = 0; i < response.data.length; i += 1) {
      const noti = response.data[i]
      const options = {
        icon: '/noti_icon.png',
        body: noti.message,
      }

      switch (noti.notification_type.toUpperCase()) {
        case 'NEW_ANSWER':
          options.tag = `/question/${noti.content_id}`
          yield put(actions.showNotification('SNUwagon', options))
          break
        case 'ANSWER_SELECTED':
          options.tag = `/question/${noti.content_id}`
          yield put(actions.showNotification('SNUwagon', options))
          break
        case 'INFORMATION_BOUGHT':
          options.tag = `/information/${noti.content_id}`
          yield put(actions.showNotification('SNUwagon', options))
          break
        default:
          break
      }
    }
  }
}

export function* handleShowNotification(message, options) {
  let notification

  if (!('Notification' in window)) {
    yield false
  } else if (Notification.permission === 'granted') {
    notification = new Notification(message, options)
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission((permission) => {
      if (permission === 'granted') {
        notification = new Notification(message, options)
      }
    })
  }

  if (notification !== undefined) {
    notification.onclick = (event) => {
      store.dispatch(actions.changeRoute(event.target.tag))
    }

    notification.close.bind(notification)

    yield setTimeout(() => {
      notification.close()
    }, 3000)
  }
}

export function* handleGetNewsfeed() {
  const response = yield call(api.get, `${baseUrl}/newsfeed`)
  if (response.success === true) {
    yield put(actions.updateNewsfeed(response.data))
  }
}

export function* handleResolveNewsfeed(nid) {
  const data = { nid }
  const response = yield call(api.put, `${baseUrl}/newsfeed`, data)

  if (response.success === true) {
    yield put(actions.getNewsfeed())
  }
}


/* watcher functions */
function* watchChangeRoute() {
  while (true) {
    const { route } = yield take(actions.CHANGE_ROUTE)
    yield call(handleChangeRoute, route)
  }
}

function* watchSignIn() {
  while (true) {
    const { username, password } = yield take(actions.SIGN_IN)
    yield call(handleSignIn, username, password)
  }
}

function* watchSignUp() {
  while (true) {
    const { email, username, password } = yield take(actions.SIGN_UP)
    yield call(handleSignUp, email, username, password)
  }
}

function* watchSignOut() {
  while (true) {
    yield take(actions.SIGN_OUT)
    yield call(handleSignOut)
  }
}

function* watchGetUserProfile() {
  while (true) {
    yield take(actions.GET_USER_PROFILE)
    yield call(handleGetUserProfile)
  }
}

function* watchGetNewPushNotification() {
  while (true) {
    const { update } = yield take(actions.GET_NEW_PUSH_NOTIFICATION)
    yield call(handleGetNewPushNotification, update)
  }
}

function* watchShowNotification() {
  while (true) {
    const { message, options } = yield take(actions.SHOW_NOTIFICATION)
    yield call(handleShowNotification, message, options)
  }
}

function* watchGetNewsfeed() {
  while (true) {
    yield take(actions.GET_NEWSFEED)
    yield call(handleGetNewsfeed)
  }
}

function* resolveNewsfeed() {
  while (true) {
    const { nid } = yield take(actions.RESOLVE_NEWSFEED)
    yield call(handleResolveNewsfeed, nid)
  }
}

export default function* () {
  yield fork(watchSignIn)
  yield fork(watchSignUp)
  yield fork(watchSignOut)
  yield fork(watchChangeRoute)
  yield fork(watchGetUserProfile)
  yield fork(watchShowNotification)
  yield fork(watchGetNewPushNotification)
  yield fork(watchGetNewsfeed)
  yield fork(resolveNewsfeed)
}
