import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const Notice = ({ children }) => (
  <div
    className={styles.wrapper}
    dangerouslySetInnerHTML={{ __html: children }}
  />
)

Notice.propTypes = {
  children: PropTypes.string.isRequired
}

export default Notice
