import { ADD_CHARACTER } from './action-types';
import { addCharacter } from './actions';

describe('characters actions', () => {
  it('should create an action to add a character', () => {
    const character = {
      name: 'Sonic',
      tier: 'S',
      avatarUrl: 'https://via.placeholder.com/50x50',
    };
    expect(addCharacter(character)).to.deep.equal({
      type: ADD_CHARACTER,
      character,
    });
  });
});
