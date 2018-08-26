import gameReducer from '../game/reducer';
import { ADD_GAME } from '../game/action-types';

export const initialState = {
  title: 'Smash Tier List',
  games: [],
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_GAME:
      return {
        ...state,
        games: state.games.concat(gameReducer(undefined, action)),
      };
    default:
      return state;
  }
};

export default appReducer;
