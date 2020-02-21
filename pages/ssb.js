import React from 'react'
import GameTierList from '../components/templates/GameTierList'

import ssb from '../data-build/ssb'

const SsbPage = () => {
  return (
    <GameTierList gameData={ssb} />
  )
}

export default SsbPage
