import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const Container = ({children}) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.any.isRequired
}

export default Container