import { SELECT_GAME, PREV_GAME, NEXT_GAME } from './action-types';
import gameReducer from '../game/reducer';
import { ADD_GAME, FILTER_BY_NAME } from '../game/action-types';
import { currentGameSelector, prevGameSelector, nextGameSelector } from './selectors';

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
        currentGameId: newGame.id,
      };
    }

    case SELECT_GAME: {
      const { key, value } = action;

      return {
        ...state,
        currentGameId: state.games.find(g => g[key] === value).id,
      };
    }

    case PREV_GAME: {
      return {
        ...state,
        currentGameId: prevGameSelector(state).id,
      };
    }

    case NEXT_GAME: {
      return {
        ...state,
        currentGameId: nextGameSelector(state).id,
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
