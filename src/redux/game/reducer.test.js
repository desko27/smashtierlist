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
  name: 'Smash Bros Fake',
  shortName: 'Fake',
  roster: [
    {
      id: 0,
      name: 'Sonic',
      tier: 'S',
      avatarUrl: 'https://via.placeholder.com/50x50',
    },
    {
      id: 1,
      name: 'Shadow',
      tier: 'S',
      avatarUrl: 'https://via.placeholder.com/50x50',
    },
    {
      id: 2,
      name: 'Mario',
      tier: 'S',
      avatarUrl: 'https://via.placeholder.com/50x50',
    },
    {
      id: 3,
      name: 'Fox',
      tier: 'S',
      avatarUrl: 'https://via.placeholder.com/50x50',
    },
    {
      id: 4,
      name: 'Luigi',
      tier: 'A',
      avatarUrl: 'https://via.placeholder.com/50x50',
    },
    {
      id: 5,
      name: 'Lucario',
      tier: 'A',
      avatarUrl: 'https://via.placeholder.com/50x50',
    },
    {
      id: 6,
      name: 'Zelda',
      tier: 'B',
      avatarUrl: 'https://via.placeholder.com/50x50',
    },
    {
      id: 7,
      name: 'Link',
      tier: 'B',
      avatarUrl: 'https://via.placeholder.com/50x50',
    },
    {
      id: 8,
      name: 'Falco',
      tier: 'B',
      avatarUrl: 'https://via.placeholder.com/50x50',
    },
    {
      id: 9,
      name: 'Olimar',
      tier: 'C',
      avatarUrl: 'https://via.placeholder.com/50x50',
    },
    {
      id: 10,
      name: 'Ike',
      tier: 'D',
      avatarUrl: 'https://via.placeholder.com/50x50',
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
