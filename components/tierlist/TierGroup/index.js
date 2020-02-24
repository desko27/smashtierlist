import React from 'react'
import PropTypes from 'prop-types'

import useOnScreen from '../../hooks/useOnScreen'

import Character from '../Character'

import styles from './index.module.css'

const TierGroup = ({ tier, characters, gameSlug }) => {
  const [isIntersecting, ref] = useOnScreen()

  return (
    <div className={styles.wrapper}>
      {!isIntersecting
        ? <div ref={ref} className={styles.placeholder} />
        : (
          <>
            <h3 className={styles.header} style={{ '--color': tier.color }}>
              {tier.name}
            </h3>
            <div className={styles.main}>
              {characters.map(character => (
                <Character
                  {...character}
                  key={character.slug}
                  gameSlug={gameSlug}
                  visible
                />
              ))}
            </div>
          </>
        )}
    </div>
  )
}

TierGroup.propTypes = {
  gameSlug: PropTypes.string.isRequired,
  tier: PropTypes.object.isRequired,
  characters: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TierGroup
