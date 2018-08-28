import { createSelector } from 'reselect';

const rosterSelector = gameState => gameState.roster;

export const rosterGroupedByTierSelector = createSelector(
  rosterSelector,
  roster => roster.reduce((groups, character) => {
    // add new tierGroup if not present
    const tierGroup = groups.find(gr => gr.tier === character.tier);
    if (!tierGroup) {
      groups.push({ tier: character.tier, characters: [character] });
      return groups;
    }

    // add character to existing tierGroup
    const i = groups.indexOf(tierGroup);
    groups[i].characters.push(character);
    return groups;
  }, []),
);
