import { PREV_GAME, NEXT_GAME } from './action-types';
import { prevGame, nextGame } from './actions';

describe('app actions', () => {
  it('should create an action to move to the previous game', () => {
    expect(prevGame()).to.deep.equal({ type: PREV_GAME });
  });
  it('should create an action to move to the next game', () => {
    expect(nextGame()).to.deep.equal({ type: NEXT_GAME });
  });
});
