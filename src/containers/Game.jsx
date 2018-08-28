import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { rosterGroupedByTierSelector } from '../redux/game/selectors';
import { currentGameSelector } from '../redux/app/selectors';

import Filter from '../components/Filter';
import Roster from '../components/Roster';

class Game extends React.Component {
  onFilterChange() { // eslint-disable-line
    alert('Filter changed!');
  }

  render() {
    const { currentState } = this.props;
    return (
      <div>
        <Filter onChange={this.onFilterChange} />
        <Roster charactersByTier={rosterGroupedByTierSelector(currentState)} />
      </div>
    );
  }
}

Game.propTypes = {
  currentState: PropTypes.object.isRequired, // eslint-disable-line
};

export default connect(
  state => ({ currentState: currentGameSelector(state) }),
)(Game);
