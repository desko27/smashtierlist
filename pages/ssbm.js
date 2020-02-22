import React from 'react'
import GameTierList from '../components/templates/GameTierList'

const SsbmPage = ({ gameData }) => {
  return (
    <GameTierList gameData={gameData} />
  )
}

SsbmPage.getInitialProps = async ({ domain }) => {
  const getTierlistUseCase = await domain.get('get_tierlist_use_case')
  const gameData = await getTierlistUseCase.execute('ssbm')
  return { gameData }
}

export default SsbmPage
