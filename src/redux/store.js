import { createStore, compose } from 'redux';
import appReducer from './app/reducer';

let finalCreateStore = createStore;
let initialState;

if (typeof document !== 'undefined') {
  // modified version of 'createStore' in order to load redux devToolsExtension
  finalCreateStore = compose(
    // eslint-disable-next-line no-underscore-dangle
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  )(createStore);

  // pick up initialState sent from server
  initialState = window.__REDUX_STATE__; // eslint-disable-line
}

const store = finalCreateStore(
  appReducer,
  initialState,
);

export default store;
