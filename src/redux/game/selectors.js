import { createSelector } from 'reselect';

const rosterSelector = gameState => gameState.roster;

export const rosterGroupedByTierSelector = createSelector(
  rosterSelector,
  roster => roster.reduce((groups, character) => {
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
);
