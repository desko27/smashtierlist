import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-static';
import 'normalize.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import history from 'common/history';
import store from '../redux/store';
import SmashTierList from './SmashTierList';

import '../index.css';

export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="*" render={({ location }) => SmashTierList({ route: location.pathname })} />
    </Router>
  </Provider>
);
