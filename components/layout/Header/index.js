import React from 'react'

import GameSelect from '../../tierlist/GameSelect'
import SuperTitle from '../../tierlist/SuperTitle'

import styles from './index.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <SuperTitle>Smash Tier List.</SuperTitle>
      <GameSelect />
    </div>
  )
}

export default Header
