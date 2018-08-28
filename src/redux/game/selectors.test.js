import { rosterGroupedByTierSelector } from './selectors';

const validGameState = {
  roster: [
    { name: 'Pikachu', tier: 'S' },
    { name: 'Kirby', tier: 'S' },
    { name: 'Captain Falcon', tier: 'A' },
    { name: 'Fox', tier: 'A' },
    { name: 'Yoshi', tier: 'A' },
    { name: 'Jigglypuff', tier: 'B' },
  ],
};

describe('game selectors', () => {
  describe('has rosterGroupedByTierSelector that', () => {
    it('returns an array of tier groups correctly distributed', () => {
      const tierGroups = rosterGroupedByTierSelector(validGameState);
      expect(tierGroups).to.have.lengthOf(3);
      expect(tierGroups[0].tier).to.equal('S');
      expect(tierGroups[0].characters).to.have.lengthOf(2);
      expect(tierGroups[1].tier).to.equal('A');
      expect(tierGroups[1].characters).to.have.lengthOf(3);
      expect(tierGroups[2].tier).to.equal('B');
      expect(tierGroups[2].characters).to.have.lengthOf(1);
    });
  });
});
