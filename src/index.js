import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import {Router, browserHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.css';

import routes from './routes';
import configureStore from './redux/configureStore';
import {loadCourses, loadAuthors} from './redux/actions';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
  document.getElementById('root')
);