import { createStore, compose } from 'redux';
import appReducer from './app/reducer';

// modified version of 'createStore' in order to load redux devToolsExtension
const finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore);

const store = finalCreateStore(appReducer);

export default store;
