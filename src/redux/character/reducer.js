import { ADD_CHARACTER } from './action-types';

export const initialState = {
  id: undefined,
  slug: undefined,
  name: undefined,
  tier: undefined,
  visible: true,
};

const charactersReducer = (state = undefined, action = {}) => {
  switch (action.type) {
    case ADD_CHARACTER: {
      if (state !== undefined) throw new Error('State should be undefined at ADD_CHARACTER');
      const {
        character: {
          id,
          slug,
          name,
          tier,
        },
      } = action;

      // validate character properties
      if (typeof id !== 'number') throw new Error('`character.id` should be a number!');
      if (typeof name !== 'string') throw new Error('`character.name` should be a string!');
      if (typeof tier !== 'string') throw new Error('`character.tier` should be a string!');
      if (typeof slug !== 'string') throw new Error('`character.slug` should be a string!');

      // return the new character
      return { ...initialState, ...action.character };
    }

    default:
      return state === undefined ? initialState : state;
  }
};

export default charactersReducer;
