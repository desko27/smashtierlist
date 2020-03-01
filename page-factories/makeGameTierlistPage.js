import React from 'react'

import CommonMetaTags from '../components/seo/CommonMetaTags'
import GameTierlist from '../components/templates/GameTierlist'

const getSquaredLetter =
  letter => {
    if (letter === '-') return '➖'
    if (letter === '+') return '✚'
    const unicode = String.fromCharCode(55356)
    const squared = String.fromCharCode(56688 + letter.charCodeAt() - 65)
    return `${unicode}${squared}`
  }
const getSquaredLetters =
  string => string.split('').map(getSquaredLetter).join('')

export default gameSlug => {
  const TierlistPage = ({ gameData, nextGameSlug, prevGameSlug }) => {
    const title = `✅ Smash Tier List 🔥 ${gameData.shortName} 🎮`
    const description = gameData.rosterGroupedByTier.slice(0, 5).map(
      ({ tier, characters }) =>
        `${getSquaredLetters(tier.name)} ${characters.slice(0, 3).map(c => c.name).join(' ')}` +
         (characters.length > 3 ? '...' : '')
    ).join(' ')

    return (
      <>
        <CommonMetaTags title={title} description={description} />
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
