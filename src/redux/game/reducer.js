import { ADD_GAME } from './action-types';
import { ADD_CHARACTER } from '../character/action-types';
import { addCharacter } from '../character/actions';
import characterReducer from '../character/reducer';

export const initialState = {
  id: undefined,
  name: undefined,
  roster: [],
};

const gameReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_GAME: {
      const { game: { id, name, roster } } = action;

      // run ADD_CHARACTER on this reducer for every roster entry
      const addedCharactersState = roster.reduce(
        (newState, c) => gameReducer(newState, addCharacter(c)),
        state,
      );

      // then set the name of the game
      return { ...addedCharactersState, id, name };
    }
    case ADD_CHARACTER:
      return {
        ...state,
        roster: state.roster.concat(characterReducer(undefined, action)),
      };
    default:
      return state;
  }
};

export default gameReducer;
