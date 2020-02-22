import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const SuperTitle = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <img src='/svg/smash.svg' alt='Smash Tier List' />
        <h1>{children}</h1>
      </div>
    </div>
  )
}

SuperTitle.propTypes = {
  children: PropTypes.any.isRequired
}

export default SuperTitle
