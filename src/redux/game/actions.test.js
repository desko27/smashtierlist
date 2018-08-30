import { ADD_GAME, FILTER_BY_NAME } from './action-types';
import { addGame, filterByName } from './actions';
import { validGame } from './reducer.test';

describe('game actions', () => {
  it('should create an action to add a game', () => {
    expect(addGame(validGame)).to.deep.equal({
      type: ADD_GAME,
      game: validGame,
    });
  });
  it('should create an action to filter characters by name', () => {
    expect(filterByName('fa')).to.deep.equal({
      type: FILTER_BY_NAME,
      search: 'fa',
    });
  });
});
