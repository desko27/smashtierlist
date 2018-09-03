import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import SmashTierList from './SmashTierList';

import '../index.css';

export default () => (
  <Provider store={store}>
    <SmashTierList />
  </Provider>
);
