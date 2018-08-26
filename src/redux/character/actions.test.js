import { ADD_CHARACTER } from './action-types';
import { addCharacter } from './actions';
import { validCharacter } from './reducer.test';

describe('character actions', () => {
  it('should create an action to add a character', () => {
    expect(addCharacter(validCharacter)).to.deep.equal({
      type: ADD_CHARACTER,
      character: validCharacter,
    });
  });
});
