import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { filterByName } from '../redux/game/actions';
import { visibleRosterGroupedByTierSelector } from '../redux/game/selectors';
import { currentGameSelector } from '../redux/app/selectors';

import Filter from '../components/Filter';
import Roster from '../components/Roster';

class Game extends React.Component {
  onFilterChange = (e) => {
    const { dispatch } = this.props;
    dispatch(filterByName(e.target.value));
  }

  render() {
    const { currentGame } = this.props;
    return (
      <div>
        <Filter onChange={this.onFilterChange} />
        <Roster
          gameSlug={currentGame.slug}
          charactersByTier={visibleRosterGroupedByTierSelector(currentGame)}
        />
      </div>
    );
  }
}

Game.propTypes = {
  currentGame: PropTypes.object.isRequired, // eslint-disable-line
  dispatch: PropTypes.func.isRequired,
};

export default connect(
  state => ({ currentGame: currentGameSelector(state) }),
)(Game);
