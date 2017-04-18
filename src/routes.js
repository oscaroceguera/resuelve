import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from './containers/App/App';
import HomeContainer from './containers/Home/HomeContainer';
import TableContainer from './containers/Table/TableContainer';

export default function getRoutes (history) {
  return (
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={HomeContainer} />
        <Route path="tabla" component={TableContainer} />
      </Route>
    </Router>
  )
}
