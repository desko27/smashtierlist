import React from 'react'
import GameTierList from '../components/templates/GameTierList'

const GAME_SLUG = 'ssbu'

const Home = ({ gameData, nextGameSlug, prevGameSlug }) => {
  console.log(nextGameSlug, prevGameSlug)
  return (
    <GameTierList gameData={gameData} />
  )
}

Home.getInitialProps = async ({ domain }) => {
  const getTierlistUseCase = await domain.get('get_tierlist_use_case')
  const gameData = await getTierlistUseCase.execute(GAME_SLUG)
  const getNextGameSlugUseCase = await domain.get('get_next_game_slug_use_case')
  const nextGameSlug = await getNextGameSlugUseCase.execute(GAME_SLUG, 'next')
  const prevGameSlug = await getNextGameSlugUseCase.execute(GAME_SLUG, 'prev')
  return { gameData, nextGameSlug, prevGameSlug }
}

export default Home
