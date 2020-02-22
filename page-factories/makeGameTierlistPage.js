import React from 'react'
import GameTierlist from '../components/templates/GameTierlist'

export default gameSlug => {
  const TierlistPage = ({ gameData, nextGameSlug, prevGameSlug }) => {
    return (
      <GameTierlist
        gameData={gameData}
        nextGameSlug={nextGameSlug}
        prevGameSlug={prevGameSlug}
      />
    )
  }

  TierlistPage.getInitialProps = async ({ domain }) => {
    const fetchGameData = async () => {
      const getTierlistUseCase = await domain.get('get_tierlist_use_case')
      return getTierlistUseCase.execute(gameSlug)
    }
    const fetchNextGameSlugs = async () => {
      const getNextGameSlugUseCase = await domain.get('get_next_game_slug_use_case')
      return Promise.all([
        getNextGameSlugUseCase.execute(gameSlug, 'next'),
        getNextGameSlugUseCase.execute(gameSlug, 'prev')
      ])
    }

    const [gameData, [nextGameSlug, prevGameSlug]] = await Promise.all([
      fetchGameData(),
      fetchNextGameSlugs()
    ])

    return { gameData, nextGameSlug, prevGameSlug }
  }

  return TierlistPage
}
