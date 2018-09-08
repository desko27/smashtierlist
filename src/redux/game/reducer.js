import { ADD_GAME, FILTER_BY_NAME } from './action-types';
import { ADD_CHARACTER } from '../character/action-types';
import { addCharacter } from '../character/actions';
import characterReducer from '../character/reducer';

export const initialState = {
  id: undefined,
  name: undefined,
  shortName: undefined,
  roster: [],
};

const gameReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_GAME: {
      const {
        game: {
          id,
          slug,
          name,
          shortName,
          roster,
        },
      } = action;

      // run ADD_CHARACTER on this reducer for every roster entry
      const addedCharactersState = roster.reduce(
        (newState, c) => gameReducer(newState, addCharacter(c)),
        state,
      );

      // then set the other properties of the game
      return {
        ...addedCharactersState,
        id,
        slug,
        name,
        shortName,
      };
    }

    case ADD_CHARACTER: {
      return {
        ...state,
        roster: state.roster.concat(characterReducer(undefined, action)),
      };
    }

    case FILTER_BY_NAME: {
      const { search } = action;
      return {
        ...state,
        roster: state.roster.map(
          c => ({ ...c, visible: c.name.toLowerCase().includes(search.toLowerCase()) }),
        ),
      };
    }

    default:
      return state;
  }
};

export default gameReducer;
