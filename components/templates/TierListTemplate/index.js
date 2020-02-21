import React from 'react'

import Main from '../../layout/Main'

import TierGroup from '../../tierlist/TierGroup'

const characters = [
  {
    slug: 'sonic',
    name: 'Sonic',
    color: '#702'
  },
  {
    slug: 'zelda',
    name: 'Zelda',
    color: '#072'
  }
]

const TierListTemplate = () => {
  return (
    <Main>
      <TierGroup
        gameSlug='ssbu'
        tier={{ name: 'B', color: '#963' }}
        characters={characters}
      />
    </Main>
  )
}

export default TierListTemplate
