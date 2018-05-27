import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import HomePage from './components/pages/HomePage'
import SignInPage from './components/pages/SignInPage'
import SignUpPage from './components/pages/SignUpPage'
import QuestionWritePage from './components/pages/QuestionWritePage'
import QuestionPage from './components/pages/QuestionPage'
import InformationWritePage from './components/pages/InformationWritePage'
import InformationPage from './components/pages/InformationPage'
import PostListPage from './components/pages/PostListPage'
import SearchPage from './components/pages/SearchPage'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="signin" component={SignInPage} />
    <Route path="signup" component={SignUpPage} />
    <Route path="question" component={QuestionWritePage} />
    <Route path="question/:id" component={QuestionPage} />
    <Route path="information" component={InformationWritePage} />
    <Route path="information/:id" component={InformationPage} />
    <Route path="list" component={PostListPage} />
    <Route path="search" component={SearchPage} />
  </Route>
)

export default routes
