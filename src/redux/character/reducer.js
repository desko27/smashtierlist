import { ADD_CHARACTER } from './action-types';

export const initialState = {
  name: undefined,
  tier: undefined,
  avatarUrl: undefined,
  visible: true,
};

const charactersReducer = (state = undefined, action = {}) => {
  switch (action.type) {
    case ADD_CHARACTER: {
      if (state !== undefined) throw new Error('State should be undefined at ADD_CHARACTER');
      const { character: { name, tier, avatarUrl } } = action;

      // validate character properties
      if (typeof name !== 'string') throw new Error('`character.name` should be a string!');
      if (typeof tier !== 'string') throw new Error('`character.tier` should be a string!');
      if (typeof avatarUrl !== 'string' || !/(http(s?):)([/|.|\w|\s|-])*/.test(avatarUrl)) {
        throw new Error('`character.avatarUrl` should be a valid URL.');
      }

      // return the new character
      return { ...initialState, ...action.character };
    }

    default:
      return state === undefined ? initialState : state;
  }
};

export default charactersReducer;
