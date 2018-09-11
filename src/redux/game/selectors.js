import { createSelector } from 'reselect';

const tiersSelector = gameState => gameState.tiers;
const rosterSelector = gameState => gameState.roster;

export const rosterGroupedByTier = (onlyVisible = true) => theState => (
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
  )(theState)
);

export const allRosterGroupedByTierSelector = rosterGroupedByTier(false);
export const visibleRosterGroupedByTierSelector = rosterGroupedByTier();
