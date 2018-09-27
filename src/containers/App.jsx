import React from 'react';
import { Router, Route } from 'react-static';
import 'normalize.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import history from 'common/history';
import SmashTierList from './SmashTierList';
import store from '../store'

import '../index.css';

export default class App extends React.Component {
  constructor() {
    super()
    store.subscribe(()=> this.forceUpdate())
  }

  render() {
    return (
      <Router history={history}>
        <Route path="*" render={({ location }) => <SmashTierList history={history} route={location.pathname}/>} />
      </Router>
    );
  }
}
