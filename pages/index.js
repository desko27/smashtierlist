import React from 'react'
import GameTierList from '../components/templates/GameTierList'

const Home = ({ gameData }) => {
  return (
    <GameTierList gameData={gameData} />
  )
}

Home.getInitialProps = async ({ domain }) => {
  const getTierlistUseCase = await domain.get('get_tierlist_use_case')
  const gameData = await getTierlistUseCase.execute('ssbu')
  return { gameData }
}

export default Home
