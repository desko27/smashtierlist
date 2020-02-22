import React from 'react'
import GameTierList from '../components/templates/GameTierList'

const Ssb4Page = ({ gameData }) => {
  return (
    <GameTierList gameData={gameData} />
  )
}

Ssb4Page.getInitialProps = async ({ domain }) => {
  const getTierlistUseCase = await domain.get('get_tierlist_use_case')
  const gameData = await getTierlistUseCase.execute('ssb4')
  return { gameData }
}

export default Ssb4Page
