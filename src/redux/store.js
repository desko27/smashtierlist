import { createStore } from 'redux';
import appReducer from './app/reducer';

const store = createStore(appReducer);

export default store;
