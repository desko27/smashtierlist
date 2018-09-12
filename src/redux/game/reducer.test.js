import gameReducer, { initialState } from './reducer';
import { addGame, filterByName } from './actions';
import { addCharacter } from '../character/actions';
import { initialState as characterInitialState } from '../character/reducer';
import { validCharacter } from '../character/reducer.test';

const initCharacter = c => ({ ...characterInitialState, ...c });

export const initGame = (game) => {
  const initializedRoster = game.roster.map(c => initCharacter(c));
  const initializedGame = { ...game, roster: initializedRoster };
  return { ...initialState, ...initializedGame };
};

export const validGame = {
  id: 0,
  slug: 'sbf',
  route: 'fake',
  name: 'Smash Bros Fake',
  shortName: 'Fake',
  tiers: [
    { name: 'S', color: '#f00' },
    { name: 'A', color: '#ff0' },
    { name: 'B', color: '#00ff00' },
    { name: 'C', color: '#bfffff' },
    { name: 'D', color: '#7f7fff' },
  ],
  roster: [
    {
      id: 0,
      slug: 'sonic',
      name: 'Sonic',
      color: '#ffffff',
      tier: 'S',
    },
    {
      id: 1,
      slug: 'shadow',
      name: 'Shadow',
      color: '#ffffff',
      tier: 'S',
    },
    {
      id: 2,
      slug: 'mario',
      name: 'Mario',
      color: '#ffffff',
      tier: 'S',
    },
    {
      id: 3,
      slug: 'fox',
      name: 'Fox',
      color: '#ffffff',
      tier: 'S',
    },
    {
      id: 4,
      slug: 'luigi',
      name: 'Luigi',
      color: '#ffffff',
      tier: 'A',
    },
    {
      id: 5,
      slug: 'lucario',
      name: 'Lucario',
      color: '#ffffff',
      tier: 'A',
    },
    {
      id: 6,
      slug: 'zelda',
      name: 'Zelda',
      color: '#ffffff',
      tier: 'B',
    },
    {
      id: 7,
      slug: 'link',
      name: 'Link',
      color: '#ffffff',
      tier: 'B',
    },
    {
      id: 8,
      slug: 'falco',
      name: 'Falco',
      color: '#ffffff',
      tier: 'B',
    },
    {
      id: 9,
      slug: 'olimar',
      name: 'Olimar',
      color: '#ffffff',
      tier: 'C',
    },
    {
      id: 10,
      slug: 'ike',
      name: 'Ike',
      color: '#ffffff',
      tier: 'D',
    },
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

  describe('has FILTER_BY_NAME handler that', () => {
    it('filters the entire roster by name when searching "li"', () => {
      const filteredRoster = gameReducer(initGame(validGame), filterByName('li')).roster;
      expect(filteredRoster.filter(c => c.visible)).to.have.lengthOf(2);
    });

    it('filters the entire roster by name when searching "so"', () => {
      const filteredRoster = gameReducer(initGame(validGame), filterByName('so')).roster;
      expect(filteredRoster.filter(c => c.visible)).to.have.lengthOf(1);
    });

    it('filters the entire roster by name when searching "Lu"', () => {
      const filteredRoster = gameReducer(initGame(validGame), filterByName('Lu')).roster;
      expect(filteredRoster.filter(c => c.visible)).to.have.lengthOf(2);
    });

    it('filters all the elements when searching "not-existing"', () => {
      const filteredRoster = gameReducer(initGame(validGame), filterByName('not-existing')).roster;
      expect(filteredRoster.filter(c => c.visible)).to.have.lengthOf(0);
    });
  });
});
