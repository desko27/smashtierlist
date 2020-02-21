import React from 'react'

import Main from '../../layout/Main'

import Roster from '../../tierlist/Roster'

import ssbu from '../../../data-build/ssbu'

const GameTierList = () => {
  return (
    <Main>
      <Roster
        gameSlug='ssbu'
        charactersByTier={ssbu.rosterGroupedByTier}
      />
    </Main>
  )
}

export default GameTierList
