import { ArgumentError } from '../../../errors';
import { ADD_CHARACTER } from './action-types';

const charactersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CHARACTER: {
      const { character: { name, tier, avatarUrl } } = action;

      // validate character properties
      if (typeof name !== 'string') throw new ArgumentError('Argument `name` should be a string!');
      if (typeof tier !== 'string') throw new ArgumentError('Argument `tier` should be a string!');
      if (typeof avatarUrl !== 'string' || !/(http(s?):)([/|.|\w|\s|-])*/.test(avatarUrl)) {
        throw new ArgumentError('Argument `avatarUrl` should be a valid URL.');
      }

      // add character to the list
      return [...state, action.character];
    }
    default:
      return state;
  }
};

export default charactersReducer;
