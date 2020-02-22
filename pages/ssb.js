import React from 'react'
import GameTierList from '../components/templates/GameTierList'

const SsbPage = ({ gameData }) => {
  return (
    <GameTierList gameData={gameData} />
  )
}

SsbPage.getInitialProps = async ({ domain }) => {
  const getTierlistUseCase = await domain.get('get_tierlist_use_case')
  const gameData = await getTierlistUseCase.execute('ssb')
  return { gameData }
}

export default SsbPage
