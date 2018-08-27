import React from 'react';
import PropTypes from 'prop-types';
import TierGroup from './TierGroup';

const Roster = ({ charactersByTier }) => (
  <div>
    {charactersByTier.map(({ tier, characters }) => (
      <TierGroup tier={tier} characters={characters} />
    ))}
  </div>
);

Roster.propTypes = {
  charactersByTier: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Roster;
