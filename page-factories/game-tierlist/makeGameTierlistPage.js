import React from 'react'

import CommonMetaTags from '../../components/seo/CommonMetaTags'
import GameTierlist from '../../components/templates/GameTierlist'

import { getTitle, getDescription } from './seo'

export default gameSlug => {
  const TierlistPage = ({ gameData, nextGameSlug, prevGameSlug }) => {
    return (
      <>
        <CommonMetaTags
          title={getTitle(gameData)}
          description={getDescription(gameData)}
        />
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
