import { currentGameSelector } from './selectors';

describe('app selectors', () => {
  describe('exports currentGameSelector that', () => {
    it('returns the current game based on state.currentGameId', () => {
      expect(currentGameSelector({
        currentGameId: 4,
        games: [
          { id: 12, name: 'Melee' },
          { id: 4, name: 'Brawl' },
          { id: 27, name: 'U' },
        ],
      })).to.have.property('name').that.equals('Brawl');
    });
  });
});
