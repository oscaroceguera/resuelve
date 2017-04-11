// Our dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

// Load containers
import App from './containers/App/App';
import HomeContainer from './containers/Home/HomeContainer';
import TableContainer from './containers/Table/TableContainer';

import './index.css';

// Routes config
ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomeContainer} />
      <Route path="tabla" component={TableContainer} />
    </Route>
  </Router>,
  document.getElementById('root')
);
