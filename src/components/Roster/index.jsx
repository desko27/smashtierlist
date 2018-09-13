import React from 'react';
import PropTypes from 'prop-types';
import TierGroup from './TierGroup';

import { RosterWrapper } from './styles';

const Roster = ({ gameSlug, charactersByTier }) => (
  <RosterWrapper>
    {charactersByTier.map(({ tier, characters }) => (
      <TierGroup key={`${gameSlug}-${tier.name}`} gameSlug={gameSlug} tier={tier} characters={characters} />
    ))}
  </RosterWrapper>
);

Roster.propTypes = {
  gameSlug: PropTypes.string.isRequired,
  charactersByTier: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Roster;
