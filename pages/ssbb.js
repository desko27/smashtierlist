import React from 'react'
import GameTierList from '../components/templates/GameTierList'

const SsbbPage = ({ gameData }) => {
  return (
    <GameTierList gameData={gameData} />
  )
}

SsbbPage.getInitialProps = async ({ domain }) => {
  const getTierlistUseCase = await domain.get('get_tierlist_use_case')
  const gameData = await getTierlistUseCase.execute('ssbb')
  return { gameData }
}

export default SsbbPage
