import { ADD_CHARACTER } from './action-types';

export const initialState = {
  id: undefined,
  slug: undefined,
  name: undefined,
  color: undefined,
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
          color,
          tier,
        },
      } = action;

      // validate character properties
      if (typeof id !== 'number') throw new Error('`character.id` should be a number!');
      if (typeof name !== 'string') throw new Error('`character.name` should be a string!');
      if (typeof color !== 'string' || !color.match(/^#([0-9a-f]{3}){1,2}$/i)) {
        throw new Error('`character.color` should be a valid hex color string!');
      }
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
