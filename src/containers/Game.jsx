import React from 'react';
import PropTypes from 'prop-types';
import Filter from '../components/Filter';
import Roster from '../components/Roster';

const Game = ({ roster }) => (
  <div>
    <Filter />
    <Roster charactersByTier={[{ tier: 'S', characters: roster }]} />
  </div>
);

Game.propTypes = {
  roster: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Game;
