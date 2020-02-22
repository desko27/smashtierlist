import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Main from '../../layout/Main'
import Wrapper from '../../layout/Wrapper'

import Roster from '../../tierlist/Roster'

const GameTierlist = ({ gameData, nextGameSlug, prevGameSlug }) => {
  const [charactersByTier, setCharactersByTier] = useState(gameData.rosterGroupedByTier)

  return (
    <Wrapper>
      <Header
        gameData={gameData}
        prevGameSlug={prevGameSlug}
        nextGameSlug={nextGameSlug}
        setCharactersByTier={setCharactersByTier}
      />
      <Main>
        <Roster
          gameSlug={gameData.slug}
          charactersByTier={charactersByTier}
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
