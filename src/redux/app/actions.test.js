import { SELECT_GAME, PREV_GAME, NEXT_GAME } from './action-types';
import { selectGame, prevGame, nextGame } from './actions';

describe('app actions', () => {
  it('should create an action to move to the requested game by route', () => {
    expect(selectGame('route', 'fake')).to.deep.equal(
      { type: SELECT_GAME, key: 'route', value: 'fake' },
    );
  });
  it('should create an action to move to the previous game', () => {
    expect(prevGame()).to.deep.equal({ type: PREV_GAME });
  });
  it('should create an action to move to the next game', () => {
    expect(nextGame()).to.deep.equal({ type: NEXT_GAME });
  });
});
