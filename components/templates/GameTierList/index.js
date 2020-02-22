import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Main from '../../layout/Main'
import Wrapper from '../../layout/Wrapper'

import Roster from '../../tierlist/Roster'

const GameTierlist = ({ gameData, nextGameSlug, prevGameSlug }) => {
  return (
    <Wrapper>
      <Header
        gameData={gameData}
        prevGameSlug={prevGameSlug}
        nextGameSlug={nextGameSlug}
      />
      <Main>
        <Roster
          gameSlug={gameData.slug}
          charactersByTier={gameData.rosterGroupedByTier}
        />
      </Main>
      <Footer />
    </Wrapper>
  )
}

GameTierlist.propTypes = {
  gameData: PropTypes.object.isRequired,
  context: PropTypes.object.isRequired
}

export default GameTierlist
