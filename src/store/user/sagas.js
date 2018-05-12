import { take, call, fork, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'
import * as displayActions from '../display/actions'

const baseUrl = ''
const authUrl = `${baseUrl}/auth`

export function* handleChangeRoute(newRoute) {
  yield put(push(newRoute))
}

export function* handleSignIn(username, password) {
  const data = { username, password }
  const response = yield call(api.post, `${authUrl}/signin`, data)

  if (response.success === true) {
    yield put(actions.getUserProfile())
    yield put(actions.changeRoute('/'))
  } else {
    yield put(displayActions.updateSignInModal(true, 'Username 또는 password가 잘못되었습니다'))
  }
}

export function* handleSignUp(email, username, password) {
  const data = { email, username, password }
  const response = yield call(api.post, `${authUrl}/signup`, data)
  if (response.success === true) {
    yield put(actions.changeRoute('/signin'))
  } else {
    yield put(displayActions.updateSignUpModal(true, '중복된 email 또는 username이 존재합니다.'))
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

export default function* () {
  yield fork(watchSignIn)
  yield fork(watchSignUp)
  yield fork(watchSignOut)
  yield fork(watchChangeRoute)
  yield fork(watchGetUserProfile)
}
