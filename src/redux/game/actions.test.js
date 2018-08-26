import { ADD_GAME } from './action-types';
import { addGame } from './actions';
import { validGame } from './reducer.test';

describe('game actions', () => {
  it('should create an action to add a game', () => {
    expect(addGame(validGame)).to.deep.equal({
      type: ADD_GAME,
      game: validGame,
    });
  });
});
