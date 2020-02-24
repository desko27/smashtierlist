import React from 'react'
import PropTypes from 'prop-types'

import SmashIcon from '../../icons/smash.svg'

import styles from './index.module.css'

const SuperTitle = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <SmashIcon />
        <h1>{children}</h1>
      </div>
    </div>
  )
}

SuperTitle.propTypes = {
  children: PropTypes.any.isRequired
}

export default SuperTitle
