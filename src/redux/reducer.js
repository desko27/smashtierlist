import { combineReducers } from 'redux';
import gamesReducer from './games/reducer';

const reducer = combineReducers({
  games: gamesReducer,
});

export default reducer;
