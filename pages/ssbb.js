import React from 'react'
import GameTierList from '../components/templates/GameTierList'

import ssbb from '../data-build/ssbb'

const SsbbPage = () => {
  return (
    <GameTierList gameData={ssbb} />
  )
}

export default SsbbPage
