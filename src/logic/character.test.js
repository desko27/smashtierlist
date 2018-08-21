import Character from './character';

describe('Character', () => {
  let character;
  const validArguments = {
    name: 'Foo',
    tier: 'A',
    image: 'http://example.com',
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
  describe('throws error at constructor if argument', () => {
    it('name is not a string', () => {
      expect(() => {
        character = new Character({ ...validArguments, name: 7 });
      }).to.throw(Error).with.property('name', 'InvalidArgument');
    });
    it('tier is not a string', () => {
      expect(() => {
        character = new Character({ ...validArguments, tier: 7 });
      }).to.throw(Error).with.property('name', 'InvalidArgument');
    });
    it('tier is not a string from allowedTiers', () => {
      expect(() => {
        character = new Character({ ...validArguments, tier: 'FOO' });
      }).to.throw(Error).with.property('name', 'InvalidArgument');
    });
    it('image is not a link', () => {
      expect(() => {
        character = new Character({ ...validArguments, image: 'http://example.com' });
      }).to.throw(Error).with.property('name', 'InvalidArgument');
    });
  });
  describe('has getTierWeight method that', () => {
    it('returns the index of the character\'s tier on allowedTiers array', () => {
      character = new Character({ ...validArguments, tier: 'S' });
      expect(character.tier.getTierWeight()).to.equal(0);
      character = new Character({ ...validArguments, tier: 'A' });
      expect(character.tier.getTierWeight()).to.equal(1);
      character = new Character({ ...validArguments, tier: 'B' });
      expect(character.tier.getTierWeight()).to.equal(2);
      character = new Character({ ...validArguments, tier: 'C' });
      expect(character.tier.getTierWeight()).to.equal(3);
      character = new Character({ ...validArguments, tier: 'D' });
      expect(character.tier.getTierWeight()).to.equal(4);
      character = new Character({ ...validArguments, tier: 'E' });
      expect(character.tier.getTierWeight()).to.equal(5);
      character = new Character({ ...validArguments, tier: 'F' });
      expect(character.tier.getTierWeight()).to.equal(6);
      character = new Character({ ...validArguments, tier: 'G' });
    });
  });
});
