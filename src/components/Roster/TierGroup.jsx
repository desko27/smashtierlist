import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const TierGroup = ({ gameSlug, tier, characters }) => (
  <div>
    <header>
      Tier {tier}
    </header>
    <main>
      {characters.map(c => <Character key={c.id} gameSlug={gameSlug} {...c} />)}
    </main>
  </div>
);

TierGroup.propTypes = {
  gameSlug: PropTypes.string.isRequired,
  tier: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TierGroup;
