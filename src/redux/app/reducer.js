import { PREV_GAME, NEXT_GAME } from './action-types';
import gameReducer from '../game/reducer';
import { ADD_GAME, FILTER_BY_NAME } from '../game/action-types';
import { currentGameSelector } from './selectors';

export const initialState = {
  title: 'Smash Tier List',
  currentGameId: null,
  games: [],
  currentFilter: '',
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
      const currentGameIndex = state.games.findIndex(g => g.id === state.currentGameId);
      const prevGameIndex = (currentGameIndex - 1 + state.games.length) % state.games.length;
      return {
        ...state,
        currentGameId: state.games[prevGameIndex].id,
      };
    }

    case NEXT_GAME: {
      const currentGameIndex = state.games.findIndex(g => g.id === state.currentGameId);
      const nextGameIndex = (currentGameIndex + 1) % state.games.length;
      return {
        ...state,
        currentGameId: state.games[nextGameIndex].id,
      };
    }

    case FILTER_BY_NAME: {
      const { search } = action;
      const updatedGame = gameReducer(currentGameSelector(state), action);
      return {
        ...state,
        games: state.games.map(g => (g.id === updatedGame.id ? updatedGame : g)),
        currentFilter: search,
      };
    }

    default:
      return state;
  }
};

export default appReducer;
