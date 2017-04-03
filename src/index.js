import React from 'react';
import ReactDOM from 'react-dom';

import {Router, browserHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

import routes from './routes';
import store from './redux/store';

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);