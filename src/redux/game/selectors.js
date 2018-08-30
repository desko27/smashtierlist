import { createSelector } from 'reselect';

const rosterSelector = gameState => gameState.roster;

export const rosterGroupedByTier = (onlyVisible = true) => theState => (
  createSelector(
    rosterSelector,
    roster => roster.reduce((groups, character) => {
      // don't add a character if not visible
      if (onlyVisible && !character.visible) return groups;

      const tierGroupIndex = groups.findIndex(gr => gr.tier === character.tier);

      // add new tierGroup if not present
      if (tierGroupIndex === -1) {
        groups.push({ tier: character.tier, characters: [character] });
        return groups;
      }

      // add character to existing tierGroup
      groups[tierGroupIndex].characters.push(character);
      return groups;
    }, []),
  )(theState)
);

export const allRosterGroupedByTierSelector = rosterGroupedByTier(false);
export const visibleRosterGroupedByTierSelector = rosterGroupedByTier();
