import { createStore, compose } from 'redux';
import appReducer from './app/reducer';

let finalCreateStore = createStore;

if (typeof document !== 'undefined') {
  // modified version of 'createStore' in order to load redux devToolsExtension
  finalCreateStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);
}

const store = finalCreateStore(appReducer);

export default store;
