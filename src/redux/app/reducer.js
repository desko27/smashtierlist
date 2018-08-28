import gameReducer from '../game/reducer';
import { ADD_GAME } from '../game/action-types';

export const initialState = {
  title: 'Smash Tier List',
  games: [],
  currentGameId: null,
};

const appReducer = (state = initialState, action = {}) => {
  let newGame;

  switch (action.type) {
    case ADD_GAME:
      newGame = gameReducer(undefined, action);

      return {
        ...state,
        games: state.games.concat(gameReducer(undefined, action)),
        currentGameId: state.currentGameId === null ? newGame.id : state.currentGameId,
      };
    default:
      return state;
  }
};

export default appReducer;
