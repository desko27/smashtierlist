import React from 'react'
import PropTypes from 'prop-types'

import TierGroup from '../TierGroup'

const Roster = ({ gameSlug, charactersByTier }) => {
  return (
    <div>
      {charactersByTier.map(({ tier, characters }) => (
        <TierGroup key={`${gameSlug}-${tier.name}`} gameSlug={gameSlug} tier={tier} characters={characters} />
      ))}
    </div>
  )
}

Roster.propTypes = {
  gameSlug: PropTypes.string.isRequired,
  charactersByTier: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Roster
