import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-static';
import { createBrowserHistory } from 'history';
import 'normalize.css';
import store from '../redux/store';
import SmashTierList from './SmashTierList';

import '../index.css';

let history;
if (typeof document !== 'undefined') {
  history = createBrowserHistory();
}

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <SmashTierList />
    </Router>
  </Provider>
);
