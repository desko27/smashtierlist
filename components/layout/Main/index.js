import React from 'react'
import PropTypes from 'prop-types'

import Container from '../Container'

import styles from './index.module.css'

const Main = ({children}) => {
  return (
    <main className={styles.wrapper}>
      <Container>
        {children}
      </Container>
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.any.isRequired
}

export default Main
