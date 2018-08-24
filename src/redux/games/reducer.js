import { combineReducers } from 'redux';
import charactersReducer from './characters/reducer';

const gamesReducer = combineReducers({
  characters: charactersReducer,
});

export default gamesReducer;
