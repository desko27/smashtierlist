import React from 'react'

import GameSelect from '../../tierlist/GameSelect'
import SuperTitle from '../../tierlist/SuperTitle'
import FilterInput from '../../tierlist/FilterInput'

import styles from './index.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperFirstLine}>
        <SuperTitle>Smash Tier List.</SuperTitle>
        <GameSelect />
      </div>
      <div className={styles.wrapperBreakLine}>
        <FilterInput />
      </div>
    </div>
  )
}

export default Header
