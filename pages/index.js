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
  const fetchGameData = async () => {
    const getTierlistUseCase = await domain.get('get_tierlist_use_case')
    return getTierlistUseCase.execute(GAME_SLUG)
  }
  const fetchNextGameSlugs = async () => {
    const getNextGameSlugUseCase = await domain.get('get_next_game_slug_use_case')
    return Promise.all([
      getNextGameSlugUseCase.execute(GAME_SLUG, 'next'),
      getNextGameSlugUseCase.execute(GAME_SLUG, 'prev')
    ])
  }

  const [gameData, [nextGameSlug, prevGameSlug]] = await Promise.all([
    fetchGameData(),
    fetchNextGameSlugs()
  ])

  return { gameData, nextGameSlug, prevGameSlug }
}

export default Home
