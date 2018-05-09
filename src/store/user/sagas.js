import { take, call, fork, put } from 'redux-saga/effects'
import { push } from 'react-router-redux'
import api from 'services/api'
import * as actions from './actions'

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
  }
}

export function* handleSignUp(email, username, password) {
  const data = { email, username, password }
  const response = yield call(api.post, `${authUrl}/signup`, data)
  if (response.success === true) {
    yield put(actions.changeRoute('/signin'))
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

function* watchGetUserProfile() {
  while (true) {
    yield take(actions.GET_USER_PROFILE)
    yield call(handleGetUserProfile)
  }
}

export default function* () {
  yield fork(watchSignIn)
  yield fork(watchSignUp)
  yield fork(watchChangeRoute)
  yield fork(watchGetUserProfile)
}
