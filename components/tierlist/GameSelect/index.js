import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './index.module.css'

const getEmptyIfSsbu = gameSlug => gameSlug === 'ssbu' ? '' : gameSlug

function GameSelect ({ gameData, prevGameSlug, nextGameSlug }) {
  const prevLink = `/${getEmptyIfSsbu(prevGameSlug)}`
  const nextLink = `/${getEmptyIfSsbu(nextGameSlug)}`

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <Link href={prevLink}>
          <button className={styles.arrowButton} type='button'>
            <img src='/svg/arrow-left.svg' alt='Previous game' />
          </button>
        </Link>
        <h2 className={styles.gameTitle}>{gameData.shortName}</h2>
        <Link href={nextLink}>
          <button className={styles.arrowButton} type='button'>
            <img src='/svg/arrow-right.svg' alt='Next game' />
          </button>
        </Link>
      </div>
    </div>
  )
}

GameSelect.propTypes = {
  gameData: PropTypes.object.isRequired,
  nextGameSlug: PropTypes.string.isRequired,
  prevGameSlug: PropTypes.string.isRequired
}

export default GameSelect
