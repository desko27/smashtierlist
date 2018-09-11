import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { visibleRosterGroupedByTierSelector } from '../redux/game/selectors';
import { currentGameSelector } from '../redux/app/selectors';

import Roster from '../components/Roster';

// eslint-disable-next-line
class Game extends React.Component {
  render() {
    const { currentGame } = this.props;
    return (
      <div>
        <Roster
          gameSlug={currentGame.slug}
          charactersByTier={visibleRosterGroupedByTierSelector(currentGame)}
        />
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
