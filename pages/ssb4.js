import React from 'react'
import GameTierList from '../components/templates/GameTierList'

import ssb4 from '../data-build/ssb4'

const Ssb4Page = () => {
  return (
    <GameTierList gameData={ssb4} />
  )
}

export default Ssb4Page
