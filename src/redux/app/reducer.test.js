import appReducer, { initialState } from './reducer';
import { initialState as gameInitialState } from '../game/reducer';
import { initialState as characterInitialState } from '../character/reducer';
import { validGame } from '../game/reducer.test';
import { addGame } from '../game/actions';

const initCharacter = c => ({ ...characterInitialState, ...c });
const initGame = (game) => {
  const initializedRoster = game.roster.map(c => initCharacter(c));
  const initializedGame = { ...game, roster: initializedRoster };
  return { ...gameInitialState, ...initializedGame };
};

const validApp = {
  title: 'Some App title',
  games: [
    {
      name: 'Melee',
      roster: [
        { name: 'Young Link', tier: 'B', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Roy', tier: 'S', avatarUrl: 'https://via.placeholder.com/50x50' },
      ],
    },
    {
      name: 'Brawl',
      roster: [
        { name: 'Sonic', tier: 'A', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Dk. Kong', tier: 'C', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Marth', tier: 'A', avatarUrl: 'https://via.placeholder.com/50x50' },
      ],
    },
  ],
};


describe('app reducer', () => {
  it('should return the initial state if no state & action are provided', () => {
    expect(appReducer()).to.deep.equal(initialState);
  });
  it('should return the same state if no action provided', () => {
    expect(appReducer('CURRENT STATE')).to.equal('CURRENT STATE');
  });

  describe('has ADD_GAME handler that', () => {
    it('adds a new game when the list is empty', () => {
      expect(
        appReducer(undefined, addGame(validGame)),
      ).to.deep.equal({
        ...initialState,
        games: [initGame(validGame)],
      });
    });
    it('adds a new game when app has some games already', () => {
      expect(
        appReducer(validApp, addGame(validGame)),
      ).to.deep.equal({
        ...validApp,
        games: validApp.games.concat(initGame(validGame)),
      });
    });
  });
});
