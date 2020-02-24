import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const Notice = ({ children, isVisible }) => (
  <div
    className={styles.wrapper}
    style={{ display: isVisible ? 'block' : 'none' }}
    dangerouslySetInnerHTML={{ __html: children }}
  />
)

Notice.propTypes = {
  children: PropTypes.string.isRequired,
  isVisible: PropTypes.bool
}

export default Notice
