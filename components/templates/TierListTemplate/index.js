import React from 'react'

import Main from '../../layout/Main'

import Character from '../../tierlist/Character'

const TierListTemplate = () => {
  return (
    <Main>
      <Character
        name='Sonic'
        color='#702'
        slug='sonic'
        gameSlug='ssbu'
        visible
      />
    </Main>
  )
}

export default TierListTemplate
