import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { visibleRosterGroupedByTierSelector } from '../redux/game/selectors';
import { currentGameSelector } from '../redux/app/selectors';

import Roster from '../components/Roster';

// eslint-disable-next-line
class Game extends Component {
  render() {
    const { currentGame } = this.props;
    return (
      <div itemScope itemType="http://schema.org/VideoGame">
        <Roster
          gameSlug={currentGame.slug}
          charactersByTier={visibleRosterGroupedByTierSelector(currentGame)}
        />
        <meta itemProp="name" content={currentGame.name} />
        <meta itemProp="gamePlatform" content={currentGame.console} />
      </div>
    );
  }
}

Game.propTypes = {
  currentGame: PropTypes.object.isRequired,
};

export default connect(
  state => ({ currentGame: currentGameSelector(state) }),
)(Game);
