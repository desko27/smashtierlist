import React from 'react'
import GameTierList from '../components/templates/GameTierList'

import ssbu from '../data-build/ssbu'

const Home = () => {
  return (
    <GameTierList gameData={ssbu} />
  )
}

export default Home
