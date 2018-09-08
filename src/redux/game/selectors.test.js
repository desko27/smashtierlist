import { allRosterGroupedByTierSelector, visibleRosterGroupedByTierSelector } from './selectors';

// *incomplete version of a valid game state
const validGameState = {
  roster: [
    { name: 'Pikachu', tier: 'S', visible: true },
    { name: 'Kirby', tier: 'S', visible: true },
    { name: 'Captain Falcon', tier: 'A', visible: false },
    { name: 'Fox', tier: 'A', visible: false },
    { name: 'Yoshi', tier: 'A', visible: true },
    { name: 'Jigglypuff', tier: 'B', visible: false },
  ],
};

describe('game selectors', () => {
  describe('has allRosterGroupedByTierSelector that', () => {
    it('returns an array of tier groups correctly distributed', () => {
      const tierGroups = allRosterGroupedByTierSelector(validGameState);
      expect(tierGroups).to.have.lengthOf(3);
      expect(tierGroups[0].tier).to.equal('S');
      expect(tierGroups[0].characters).to.have.lengthOf(2);
      expect(tierGroups[1].tier).to.equal('A');
      expect(tierGroups[1].characters).to.have.lengthOf(3);
      expect(tierGroups[2].tier).to.equal('B');
      expect(tierGroups[2].characters).to.have.lengthOf(1);
    });
  });
  describe('has visibleRosterGroupedByTierSelector that', () => {
    it('returns an array of tier groups with only visible characters', () => {
      const tierGroups = visibleRosterGroupedByTierSelector(validGameState);
      expect(tierGroups).to.have.lengthOf(2);
      expect(tierGroups[0].tier).to.equal('S');
      expect(tierGroups[0].characters).to.have.lengthOf(2);
      expect(tierGroups[1].tier).to.equal('A');
      expect(tierGroups[1].characters).to.have.lengthOf(1);
    });
  });
});
