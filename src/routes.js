import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import HomePage from './components/pages/HomePage'
import SignInPage from './components/pages/SignInPage'
import SignUpPage from './components/pages/SignUpPage'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="signin" component={SignInPage} />
    <Route path="signup" component={SignUpPage} />
  </Route>
)

export default routes
