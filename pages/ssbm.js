import React from 'react'
import GameTierList from '../components/templates/GameTierList'

import ssbm from '../data-build/ssbm'

const SsbmPage = () => {
  return (
    <GameTierList gameData={ssbm} />
  )
}

export default SsbmPage
