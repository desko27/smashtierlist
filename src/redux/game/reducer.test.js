import gameReducer, { initialState } from './reducer';
import { addGame } from './actions';
import { addCharacter } from '../character/actions';
import { initialState as characterInitialState } from '../character/reducer';
import { validCharacter } from '../character/reducer.test';

const initCharacter = c => ({ ...characterInitialState, ...c });

export const validGame = {
  id: 0,
  name: 'Smash Bros Fake',
  shortName: 'Fake',
  roster: [
    { name: 'Sonic', tier: 'S', avatarUrl: 'https://via.placeholder.com/50x50' },
    { name: 'Shadow', tier: 'S', avatarUrl: 'https://via.placeholder.com/50x50' },
    { name: 'Mario', tier: 'S', avatarUrl: 'https://via.placeholder.com/50x50' },
    { name: 'Fox', tier: 'S', avatarUrl: 'https://via.placeholder.com/50x50' },
    { name: 'Luigi', tier: 'A', avatarUrl: 'https://via.placeholder.com/50x50' },
    { name: 'Lucario', tier: 'A', avatarUrl: 'https://via.placeholder.com/50x50' },
    { name: 'Zelda', tier: 'B', avatarUrl: 'https://via.placeholder.com/50x50' },
    { name: 'Link', tier: 'B', avatarUrl: 'https://via.placeholder.com/50x50' },
    { name: 'Falco', tier: 'B', avatarUrl: 'https://via.placeholder.com/50x50' },
    { name: 'Olimar', tier: 'C', avatarUrl: 'https://via.placeholder.com/50x50' },
    { name: 'Ike', tier: 'D', avatarUrl: 'https://via.placeholder.com/50x50' },
  ],
};

describe('game reducer', () => {
  it('should return the initial state if no state & action are provided', () => {
    expect(gameReducer()).to.deep.equal(initialState);
  });
  it('should return the same state if no action provided', () => {
    expect(gameReducer('CURRENT STATE')).to.equal('CURRENT STATE');
  });

  describe('has ADD_GAME handler that', () => {
    it('returns a new game with all initialized characters', () => {
      expect(gameReducer(undefined, addGame(validGame)))
        .to.deep.equal({
          ...validGame,
          roster: validGame.roster.map(c => initCharacter(c)),
        });
    });
  });

  describe('has ADD_CHARACTER handler that', () => {
    it('adds a new character when roster is empty', () => {
      expect(
        gameReducer(undefined, addCharacter(validCharacter)),
      ).to.deep.equal({
        ...initialState,
        roster: [initCharacter(validCharacter)],
      });
    });
    it('adds a new character when roster has some characters already', () => {
      expect(
        gameReducer(validGame, addCharacter(validCharacter)),
      ).to.deep.equal({
        ...validGame,
        roster: validGame.roster.concat(initCharacter(validCharacter)),
      });
    });
  });
});
