import { createSelector } from 'reselect';

const gamesSelector = state => state.games;
const currentGameIdSelector = state => state.currentGameId;

export const currentGameSelector = createSelector(
  gamesSelector,
  currentGameIdSelector,
  (games, currentGameId) => games.find(g => g.id === currentGameId),
);

export const prevGameSelector = createSelector(
  gamesSelector,
  currentGameIdSelector,
  (games, currentGameId) => {
    const currentGameIndex = games.findIndex(g => g.id === currentGameId);
    const prevGameIndex = (currentGameIndex - 1 + games.length) % games.length;
    return games[prevGameIndex];
  },
);

export const nextGameSelector = createSelector(
  gamesSelector,
  currentGameIdSelector,
  (games, currentGameId) => {
    const currentGameIndex = games.findIndex(g => g.id === currentGameId);
    const nextGameIndex = (currentGameIndex + 1) % games.length;
    return games[nextGameIndex];
  },
);
