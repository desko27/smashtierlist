import { createSelector } from 'reselect';

const tiersSelector = gameState => gameState.tiers;
const rosterSelector = gameState => gameState.roster;

export const rosterGroupedByTier = ({ onlyVisible = true } = {}) => gameState => (
  createSelector(
    tiersSelector,
    rosterSelector,
    (tiers, roster) => tiers.map(
      tier => ({
        tier,
        characters: roster.filter(
          c => c.tier === tier.name && (!onlyVisible || c.visible),
        ),
      }),
    ).filter(t => t.characters.length > 0),
  )(gameState)
);

export const allRosterGroupedByTierSelector = rosterGroupedByTier({ onlyVisible: false });
export const visibleRosterGroupedByTierSelector = rosterGroupedByTier();

export const noMatchSelector = gameState => (
  createSelector(
    rosterSelector,
    roster => !roster.find(c => c.visible),
  )(gameState)
);
