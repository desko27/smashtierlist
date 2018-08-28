import { PREV_GAME, NEXT_GAME } from './action-types';
import gameReducer from '../game/reducer';
import { ADD_GAME } from '../game/action-types';

export const initialState = {
  title: 'Smash Tier List',
  games: [],
  currentGameId: null,
};

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_GAME: {
      const newGame = gameReducer(undefined, action);

      return {
        ...state,
        games: state.games.concat(gameReducer(undefined, action)),
        currentGameId: state.currentGameId === null ? newGame.id : state.currentGameId,
      };
    }

    case PREV_GAME: {
      return {
        ...state,
        currentGameId: (state.currentGameId - 1 + state.games.length) % state.games.length,
      };
    }

    case NEXT_GAME: {
      return {
        ...state,
        currentGameId: (state.currentGameId + 1) % state.games.length,
      };
    }

    default:
      return state;
  }
};

export default appReducer;
