import createStore from 'pure-store';
import games from './games-data';

const store = createStore({
  siteTitle: "Smash Tier List",
  currentFilter: "",
  currentGameIndex: 0,
  games
});

if (typeof document !== 'undefined' && window.__PURE_STORE_STATE__) {
  store.update(window.__PURE_STORE_STATE__)
}

function getCurrentGame() {
  return store.state.games[store.state.currentGameIndex];
}

function getFiltertedCharactersByTier() {
  const currentGame = getCurrentGame()

  return currentGame.tiers
    .map(tier => ({
      tier,
      characters: currentGame.roster.filter(
        c => c.tier === tier.name && c.name.toLowerCase().includes(store.state.currentFilter.toLowerCase())
      )
    })).filter(t => t.characters.length > 0)
}


export default store;
export {
  getCurrentGame,
  getFiltertedCharactersByTier
};
