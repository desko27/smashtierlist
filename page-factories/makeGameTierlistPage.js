import React from 'react'

import CommonMetaTags from '../components/seo/CommonMetaTags'
import GameTierlist from '../components/templates/GameTierlist'

export default gameSlug => {
  const TierlistPage = ({ gameData, nextGameSlug, prevGameSlug }) => {
    const title = `Smash Tier List - ${gameData.name}`

    return (
      <>
        <CommonMetaTags title={title} />
        <GameTierlist
          gameData={gameData}
          nextGameSlug={nextGameSlug}
          prevGameSlug={prevGameSlug}
        />
      </>
    )
  }

  TierlistPage.getInitialProps = async ({ domain }) => {
    const fetchGameData = async () => {
      return domain.get('get_tierlist_use_case').execute(gameSlug)
    }
    const fetchNextGameSlugs = async () => {
      const getNextGameSlugUseCase = domain.get('get_next_game_slug_use_case')
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
