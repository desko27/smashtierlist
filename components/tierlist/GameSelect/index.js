import React from 'react'
import Link from 'next/link'

import styles from './index.module.css'

// TODO: make this dynamic
const prevGame = {
  route: 'ssb',
  name: 'Smash'
}
const nextGame = prevGame
const currentGame = {
  shortName: 'Ultimate'
}

const GameSelect = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <Link href={`/${prevGame.route}`}>
          <button className={styles.arrowButton} type='button'>
            <img src='/svg/arrow-left.svg' alt='Previous game' />
          </button>
        </Link>
        <h2 className={styles.gameTitle}>{currentGame.shortName}</h2>
        <Link href={`/${nextGame.route}`}>
          <button className={styles.arrowButton} type='button'>
            <img src='/svg/arrow-right.svg' alt='Next game' />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default GameSelect
