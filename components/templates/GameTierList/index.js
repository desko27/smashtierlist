import React from 'react'
import PropTypes from 'prop-types'

import Main from '../../layout/Main'

import Roster from '../../tierlist/Roster'

const GameTierList = ({ gameData }) => {
  return (
    <Main>
      <Roster
        gameSlug='ssbu'
        charactersByTier={gameData.rosterGroupedByTier}
      />
    </Main>
  )
}

GameTierList.propTypes = {
  gameData: PropTypes.object.isRequired
}

export default GameTierList
