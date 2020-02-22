import React from 'react'

import SuperTitle from '../../tierlist/SuperTitle'

import styles from './index.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <SuperTitle>Smash Tier List.</SuperTitle>
    </div>
  )
}

export default Header
