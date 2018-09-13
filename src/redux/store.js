import { createStore, compose } from 'redux';
import appReducer from './app/reducer';

let finalCreateStore = createStore;
let initialState;

if (typeof document !== 'undefined') {
  // modified version of 'createStore' in order to load redux devToolsExtension
  finalCreateStore = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);

  // pick up initialState sent from server
  initialState = window.__REDUX_STATE__; // eslint-disable-line
}

const store = finalCreateStore(
  appReducer,
  initialState,
);

export default store;
