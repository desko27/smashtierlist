import { createSelector } from 'reselect';

const gamesSelector = state => state.games;
const currentGameIdSelector = state => state.currentGameId;

export const currentGameSelector = createSelector(
  gamesSelector,
  currentGameIdSelector,
  (games, currentGameId) => games.find(g => g.id === currentGameId),
);
