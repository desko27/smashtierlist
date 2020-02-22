import React from 'react'
import PropTypes from 'prop-types'

import Footer from '../../layout/Footer'
import Header from '../../layout/Header'
import Main from '../../layout/Main'
import Wrapper from '../../layout/Wrapper'

import Roster from '../../tierlist/Roster'

const GameTierList = ({ gameData }) => {
  return (
    <Wrapper>
      <Header />
      <Main>
        <Roster
          gameSlug='ssbu'
          charactersByTier={gameData.rosterGroupedByTier}
        />
      </Main>
      <Footer />
    </Wrapper>
  )
}

GameTierList.propTypes = {
  gameData: PropTypes.object.isRequired
}

export default GameTierList
