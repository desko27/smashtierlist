import { ArgumentError } from '../errors';
import Character from './character';

describe('Character', () => {
  let character;
  const validArguments = {
    name: 'Foo',
    tier: 'A',
    avatarUrl: 'https://via.placeholder.com/50x50',
  };

  describe('has the following initial properties:', () => {
    before(() => {
      character = new Character(validArguments);
    });
    it('allowedTiers', () => {
      expect(character.allowedTiers).to.be.an('array');
      expect(character.allowedTiers).to.deep.equal(['S', 'A', 'B', 'C', 'D', 'E', 'F', 'G']);
    });
  });

  it('sets properties when passing valid arguments', () => {
    character = new Character(validArguments);
    expect(character.name).to.exist;
    expect(character.tier).to.exist;
    expect(character.avatarUrl).to.exist;
  });

  describe('throws error at constructor if argument', () => {
    it('name is not a string', () => {
      expect(() => {
        character = new Character({ ...validArguments, name: 7 });
      }).to.throw(ArgumentError);
    });
    it('tier is not a string', () => {
      expect(() => {
        character = new Character({ ...validArguments, tier: 7 });
      }).to.throw(ArgumentError);
    });
    it('tier is not a string from allowedTiers', () => {
      expect(() => {
        character = new Character({ ...validArguments, tier: 'FOO' });
      }).to.throw(ArgumentError);
    });
    it('avatarUrl is not a valid link', () => {
      expect(() => {
        character = new Character({ ...validArguments, avatarUrl: 'asd' });
      }).to.throw(ArgumentError);
    });
  });

  describe('has getTierWeight method that', () => {
    it('returns the index of the character\'s tier on allowedTiers array', () => {
      character = new Character({ ...validArguments, tier: 'S' });
      expect(character.getTierWeight()).to.equal(0);
      character = new Character({ ...validArguments, tier: 'A' });
      expect(character.getTierWeight()).to.equal(1);
      character = new Character({ ...validArguments, tier: 'B' });
      expect(character.getTierWeight()).to.equal(2);
      character = new Character({ ...validArguments, tier: 'C' });
      expect(character.getTierWeight()).to.equal(3);
      character = new Character({ ...validArguments, tier: 'D' });
      expect(character.getTierWeight()).to.equal(4);
      character = new Character({ ...validArguments, tier: 'E' });
      expect(character.getTierWeight()).to.equal(5);
      character = new Character({ ...validArguments, tier: 'F' });
      expect(character.getTierWeight()).to.equal(6);
      character = new Character({ ...validArguments, tier: 'G' });
    });
  });
});
