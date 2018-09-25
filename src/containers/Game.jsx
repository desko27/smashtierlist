import React from 'react';
import Roster from '../components/Roster';
import { getCurrentGame, getFiltertedCharactersByTier } from '../store'

// eslint-disable-next-line
class Game extends React.Component {
  render() {
    const currentGame      = getCurrentGame()
    const charactersByTier = getFiltertedCharactersByTier()

    return (
      <div itemScope itemType="http://schema.org/VideoGame">
        <Roster
          gameSlug={currentGame.slug}
          charactersByTier={charactersByTier}
        />
        <meta itemProp="name" content={currentGame.name} />
        <meta itemProp="gamePlatform" content={currentGame.console} />
      </div>
    );
  }
}

export default Game;
