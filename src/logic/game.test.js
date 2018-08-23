import { ArgumentError } from '../errors';
import Game from './game';
import Character from './character';

describe('Game', () => {
  let game;
  const validArguments = {
    name: 'Fake Smash',
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

  describe('sets the following properties when passing valid arguments:', () => {
    before(() => {
      game = new Game(validArguments);
    });
    it('name as-is', () => {
      expect(game.name).to.exist;
    });
    it('roster as an array of Character instances', () => {
      expect(game.roster).to.exist;
      game.roster.forEach(e => expect(e).to.be.an.instanceOf(Character));
    });
  });

  describe('throws error at constructor if argument', () => {
    it('name is not a string', () => {
      expect(() => {
        game = new Game({ ...validArguments, name: 7 });
      }).to.throw(ArgumentError);
    });
    it('roster is not an array of objects which are arguments for character', () => {
      expect(() => {
        game = new Game({ ...validArguments, roster: 'lol' });
      }).to.throw(ArgumentError);
      expect(() => {
        game = new Game({ ...validArguments, roster: [] });
      }).to.throw(ArgumentError);
      expect(() => {
        game = new Game({
          ...validArguments,
          roster: [
            { name: 'Fii', tier: 'C', avatarUrl: 'https://via.placeholder.com/50x50' },
            { name: 'Faa', tier: 'A', avatarUrl: 'https://via.placeholder.com/50x50' },
            { name: 'Foo', tier: 'S', avatarUrl: 'x_x' },
          ],
        });
      }).to.throw(ArgumentError);
    });
  });

  describe('has filterRosterByTier method that', () => {
    before(() => {
      game = new Game(validArguments);
    });
    it('throws error if it\'s called without an argument', () => {
      expect(() => game.filterRosterByTier()).to.throw(ArgumentError);
    });
    it('throws error if the argument is not a string from Character.allowedTiers', () => {
      expect(() => game.filterRosterByTier('FOO')).to.throw(ArgumentError);
    });
    it('returns an array of all Character instances whose tier is the passed one', () => {
      const testTiers = ['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G'];
      testTiers.forEach((testedTier) => {
        const rosterByTier = game.filterRosterByTier(testedTier);

        // they're arrays of the same length
        expect(rosterByTier.length)
          .to.equal(validArguments.roster.filter(e => e.tier === testedTier).length);

        // they all are instances of Character and have testedTier as tier property
        rosterByTier.forEach((e) => {
          expect(e).to.be.an.instanceOf(Character);
          expect(e).to.have.property('tier').that.is.a('string');
          expect(e.tier).to.equal(testedTier);
        });
      });
    });
  });

  describe('has filterRosterByName method that', () => {
    before(() => {
      game = new Game(validArguments);
    });
    it('throws error if it\'s called without an argument', () => {
      expect(() => game.filterRosterByName()).to.throw(ArgumentError);
    });
    it('throws error if the argument is not a string', () => {
      expect(() => game.filterRosterByName(7)).to.throw(ArgumentError);
    });
    it('returns an array of all Character instances whose name contains the passed string', () => {
      const filteredFalco = game.filterRosterByName('falco');
      expect(filteredFalco).to.be.an('array').that.has.lengthOf(1);
      expect(filteredFalco[0]).to.be.an.instanceOf(Character);
      expect(filteredFalco[0].name).to.equal('Falco');

      const filteredLi = game.filterRosterByName('LI');
      expect(filteredLi).to.be.an('array').that.has.lengthOf(2);
      filteredLi.forEach(e => expect(e).to.be.an.instanceOf(Character));
      expect(filteredLi[0].name).to.equal('Link');
      expect(filteredLi[1].name).to.equal('Olimar');
    });
  });
});
