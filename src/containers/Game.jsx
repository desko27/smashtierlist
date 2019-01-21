import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { currentGameSelector } from '../redux/app/selectors';
import { visibleRosterGroupedByTierSelector, allRosterGroupedByTierSelector }
  from '../redux/game/selectors';

import Roster from '../components/Roster';

// eslint-disable-next-line
class Game extends Component {
  render() {
    const { currentGame, eyeFilter } = this.props;

    const charactersByTier = eyeFilter
      ? allRosterGroupedByTierSelector(currentGame)
      : visibleRosterGroupedByTierSelector(currentGame);

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

Game.propTypes = {
  currentGame: PropTypes.object.isRequired,
  eyeFilter: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    currentGame: currentGameSelector(state),
    eyeFilter: state.eyeFilter,
  }),
)(Game);
