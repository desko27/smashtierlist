import React from 'react'
import PropTypes from 'prop-types'

import styles from './index.module.css'

const HeaderIcon = ({ icon, onClick }) => (
  <button
    className={styles.wrapper}
    onClick={onClick}
  >
    {icon}
  </button>
)

HeaderIcon.propTypes = {
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default HeaderIcon
